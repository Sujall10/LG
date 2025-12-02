import os
from PIL import Image

# === CONFIG ===
MEN_SRC = r"assets/Men/"
WOMEN_SRC = r"assets/Women/"

MEN_OUT = r"assets/Men/variants/"
WOMEN_OUT = r"assets/Women/variants/"

os.makedirs(MEN_OUT, exist_ok=True)
os.makedirs(WOMEN_OUT, exist_ok=True)

def make_variants(in_path, out_prefix):
    img = Image.open(in_path)
    w, h = img.size

    # ----- VARIANT 1: Center Square Crop -----
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    crop = img.crop((left, top, left + side, top + side))
    crop = crop.resize((800, 800))
    v1_path = out_prefix + "_v1.jpg"
    crop.save(v1_path, quality=85)

    # ----- VARIANT 2: Zoomed 10% -----
    zoom = img.resize((int(w * 1.10), int(h * 1.10)))
    zw, zh = zoom.size
    side2 = min(zw, zh)
    left2 = (zw - side2) // 2
    top2 = (zh - side2) // 2
    crop2 = zoom.crop((left2, top2, left2 + side2, top2 + side2))
    crop2 = crop2.resize((800, 800))
    v2_path = out_prefix + "_v2.jpg"
    crop2.save(v2_path, quality=85)

    return v1_path, v2_path


def process_folder(src, out_dir, prefix):
    files = sorted([
        f for f in os.listdir(src)
        if f.lower().endswith((".jpg", ".jpeg", ".png"))
    ])

    mapping = {}

    for fname in files:
        in_path = os.path.join(src, fname)
        out_prefix = os.path.join(out_dir, fname.replace(" ", "_"))
        v1, v2 = make_variants(in_path, out_prefix)
        mapping[fname] = {
            "variant1": v1,
            "variant2": v2
        }
        print(f"Processed: {fname}")

    return mapping


print("Processing MEN...")
men_mapping = process_folder(MEN_SRC, MEN_OUT, "men")

print("\nProcessing WOMEN...")
women_mapping = process_folder(WOMEN_SRC, WOMEN_OUT, "women")

print("\nDONE!")
