# EgoGazeVQA Project Page

This is the project page for **EgoGazeVQA: In the Eye of MLLM - Benchmarking Egocentric Video Intent Understanding with Gaze-Guided Prompting**, accepted at NeurIPS 2025.

## 📝 What Has Been Updated

Based on the paper content from `/home/pty_ssd/taiyi98.github.io/EgoGazeVQA_latex/`, the following updates have been made to the project page:

### 1. **Author Information**
- Updated authors: Taiying Peng, Jiacheng Hua, Miao Liu, Feng Lu
- Updated affiliations: Beihang University and Tsinghua University
- Added corresponding author markers (†)

### 2. **Title and Subtitle**
- Updated subtitle to: "Benchmarking Egocentric Video Intent Understanding with Gaze-Guided Prompting"

### 3. **Links**
- Paper: https://arxiv.org/abs/your_paper_id (update with actual arXiv link)
- Code: https://github.com/taiyi98/EgoGazeVQA
- Dataset: https://huggingface.co/datasets/taiyi09/EgoGazeVQA

### 4. **Abstract**
- Updated with the actual abstract from the paper
- Emphasized the role of gaze as an indicator of user intent
- Highlighted key contributions: 1,757 gaze-based QA pairs from 913 videos

### 5. **Method Section**
- Updated key contributions to reflect the actual research:
  - First gaze-guided VQA benchmark
  - Three gaze-guided prompting strategies
  - Comprehensive evaluation on 7 state-of-the-art MLLMs
  - Fine-tuning analysis

### 6. **Results Section**
- Updated main results table with actual experimental data
- Shows performance across Spatial, Temporal, and Causal dimensions
- Includes human performance baseline (83.8%)
- Best model: Qwen2.5-VL-72B with Salience Map (66.3%)

### 7. **Dataset Section**
- Updated statistics:
  - 913 videos
  - 1,757 QA pairs
  - 3 source datasets (Ego4D, EgoExo4D, EGTEA Gaze+)
  - 3 reasoning dimensions (Spatial, Temporal, Causal)
- Updated scenario breakdown:
  - Kitchen: 1024 QA
  - Living Room: 371 QA
  - Medical Area: 72 QA
  - Garage: 108 QA
  - Others: 182 QA

### 8. **Citation**
- Updated BibTeX entry with correct title, authors, and venue

### 9. **JavaScript Chart**
- Updated ablation study chart with actual performance numbers

## 🖼️ Missing Images

The following images need to be added to `/assets/images/`:

1. **pipeline.png** - Construction pipeline figure (from draw_pipeline.pdf)
2. **prompting.png** - Gaze-guided prompting strategies (from Prompt.pdf)
3. **result1-4.jpg** - Qualitative results (from draw_visual.pdf)
4. **teaser.png** - Already exists in Fig folder

You can convert PDF figures to PNG using:
```bash
cd /home/pty_ssd/taiyi98.github.io/EgoGazeVQA_latex/Fig
convert -density 300 draw_pipeline.pdf -quality 90 pipeline.png
convert -density 300 Prompt.pdf -quality 90 prompting.png
convert -density 300 draw_visual.pdf -quality 90 visual.png

# Copy to project directory
cp pipeline.png prompting.png visual.png teaser.png \
   /home/pty_ssd/taiyi98.github.io/projects/EgoGazeVQA/assets/images/
```

## 🔧 Next Steps

1. **Add Images**: Convert PDF figures to PNG and add them to assets/images/
2. **Update arXiv Link**: Replace "your_paper_id" with actual arXiv ID when available
3. **Add Demo Video**: If you have a demo video, add it to assets/videos/demo.mp4
4. **Test Locally**: Open index.html in a browser to verify all changes
5. **Deploy**: Push changes to GitHub Pages

## 📄 File Structure

```
projects/EgoGazeVQA/
├── index.html              # Main project page (UPDATED)
├── config.example.json     # Configuration template
├── README.md              # This file (NEW)
├── assets/
│   ├── css/
│   │   └── style.css      # Styles
│   ├── js/
│   │   └── main.js        # JavaScript (UPDATED)
│   ├── images/            # Add images here
│   └── videos/            # Add demo video here
```

## 🌐 View Online

Once deployed, the project page will be available at:
https://taiyi98.github.io/projects/EgoGazeVQA/

## 📧 Contact

For questions or issues, contact: taiyi@buaa.edu.cn

