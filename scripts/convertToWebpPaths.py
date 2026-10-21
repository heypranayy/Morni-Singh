import os
import re

src_dir = 'src'
count = 0

for root, _, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.json')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fh:
                content = fh.read()
            
            # Replace /images/morni/*.png with /images/morni/*.webp
            new_content = re.sub(r'/images/morni/([^"\'\s]+)\.png', r'/images/morni/\1.webp', content)
            
            # Replace placeholder jpgs with our newly generated webp images
            new_content = new_content.replace('/images/adventure-park.jpg', '/images/adventure-park.webp')
            new_content = new_content.replace('/images/chandi-mata.jpg', '/images/chandi-mata.webp')
            new_content = new_content.replace('/images/morni-fort.jpg', '/images/morni-fort.webp')
            new_content = new_content.replace('/images/pinjore-gardens.jpg', '/images/pinjore-gardens.webp')
            new_content = new_content.replace('/images/cactus-garden.jpg', '/images/cactus-garden.webp')
            new_content = new_content.replace('/images/sukhna-lake.jpg', '/images/sukhna-lake.webp')
            new_content = new_content.replace('/images/wildlife-sanctuary.jpg', '/images/morni/56971.webp')
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as fh:
                    fh.write(new_content)
                count += 1
                print(f'Updated {path}')

print(f'Total files updated to WebP: {count}')
