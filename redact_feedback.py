import cv2
import sys
import bidi.algorithm
sys.modules['bidi'].get_display = bidi.algorithm.get_display
import easyocr
import os
import glob
import numpy as np

def redact_images(input_dir, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    reader = easyocr.Reader(['en'], gpu=False)
    
    image_paths = glob.glob(os.path.join(input_dir, "*.jpeg")) + glob.glob(os.path.join(input_dir, "*.jpg"))
    
    for img_path in image_paths:
        print(f"Processing {img_path}...")
        img = cv2.imread(img_path)
        if img is None:
            continue
            
        results = reader.readtext(img)
        
        # We need to redact names above the message in WhatsApp chats.
        # Heuristics for names:
        # - Not white (WhatsApp message text is white)
        # - Might contain specific keywords
        # But to be safe and simple, we'll draw a blurred rectangle over any text that is found in the upper portion of a bubble.
        # Actually, since WhatsApp names are colored and the message text is white #FFFFFF or very light gray,
        # we can check the average color of the bounding box.
        # Or we can just use the provided names: "ADC", "funde", "ishwari", "Techcampus", "rajkumar", "+91", etc.
        
        # Let's define target keywords
        keywords = ['adc', 'techcampus', 'funde', 'ishwari', 'rajkumar', '+91', '91', 'birajdar', 'kulkarni']
        
        for (bbox, text, prob) in results:
            text_lower = text.lower()
            
            # Check if it matches any keyword
            needs_redact = False
            for kw in keywords:
                if kw in text_lower:
                    needs_redact = True
                    break
            
            # If it's a name, we redact it.
            # Also, maybe just redact any text that isn't primarily white?
            # Let's extract the bounding box coordinates
            top_left = tuple([int(val) for val in bbox[0]])
            bottom_right = tuple([int(val) for val in bbox[2]])
            
            x1, y1 = top_left
            x2, y2 = bottom_right
            
            # Ensure coordinates are within image bounds
            x1 = max(0, x1)
            y1 = max(0, y1)
            x2 = min(img.shape[1], x2)
            y2 = min(img.shape[0], y2)
            
            if needs_redact:
                # Apply heavy blur
                roi = img[y1:y2, x1:x2]
                roi = cv2.GaussianBlur(roi, (51, 51), 30)
                img[y1:y2, x1:x2] = roi
                # Also overlay a dark semi-transparent rectangle to completely hide it
                cv2.rectangle(img, (x1, y1), (x2, y2), (31, 44, 52), -1) # WhatsApp dark bubble color
                
        out_path = os.path.join(output_dir, os.path.basename(img_path))
        cv2.imwrite(out_path, img)
        print(f"Saved {out_path}")

input_dir_fb = r"C:\Users\Kalpesh Kulkarni\Downloads\CA\data\fb"
input_dir_main = r"C:\Users\Kalpesh Kulkarni\Downloads\CA\data"
output_dir = r"C:\Users\Kalpesh Kulkarni\.gemini\antigravity\scratch\campus-academy\public\feedback"

# Process fb folder
redact_images(input_dir_fb, output_dir)
# Process main folder (for feedback.jpeg)
redact_images(input_dir_main, output_dir)
