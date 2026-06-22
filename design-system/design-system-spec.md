# CribCast Design System Spec
> Developer reference — exact token values for all design decisions.

---

## Fonts

| Role     | Family          | Import                                                                                              |
|----------|-----------------|-----------------------------------------------------------------------------------------------------|
| Heading  | Space Grotesk   | `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700`                  |
| Body     | Inter           | `https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400`     |
| Mono     | JetBrains Mono  | `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700`                         |

```css
--font-heading: 'Space Grotesk', sans-serif;
--font-body:    'Inter', sans-serif;
--font-mono:    'JetBrains Mono', monospace;
```

---

## Color Tokens

### Brand Palette

| Token              | Hex       | Role                             |
|--------------------|-----------|----------------------------------|
| `--charcoal`       | `#353535` | Primary text, dark backgrounds   |
| `--teal`           | `#3c6e71` | Primary brand, interactive       |
| `--navy`           | `#284b63` | Secondary brand, depth           |
| `--white`          | `#ffffff` | Backgrounds, contrast            |
| `--silver`         | `#d9d9d9` | Borders, dividers, subtle fills  |

### Derived Tones

| Token              | Hex       | Derivation          |
|--------------------|-----------|---------------------|
| `--charcoal-80`    | `#5a5a5a` | Text secondary      |
| `--charcoal-40`    | `#9a9a9a` | Text tertiary / placeholder |
| `--charcoal-10`    | `#f2f2f2` | Subtle background   |
| `--teal-light`     | `#4d8d91` | Teal hover          |
| `--teal-dark`      | `#2a4f52` | Teal pressed / dark variant |
| `--teal-10`        | `#eef5f5` | Teal tinted background |
| `--navy-light`     | `#3a6b8a` | Navy hover          |
| `--navy-dark`      | `#1a3245` | Navy pressed        |
| `--navy-10`        | `#edf2f7` | Navy tinted background |
| `--silver-dark`    | `#b8b8b8` | Border emphasis     |
| `--silver-light`   | `#efefef` | Subtle fill         |

### Semantic Colors

| Token           | Hex       | Usage                     |
|-----------------|-----------|---------------------------|
| `--error`       | `#c0392b` | Errors, deal-breakers     |
| `--error-10`    | `#fdf0ee` | Error tinted bg           |
| `--success`     | `#27ae60` | Confirmed, passing        |
| `--success-10`  | `#edfaf3` | Success tinted bg         |
| `--warning`     | `#d4a017` | Caution, missing data     |
| `--warning-10`  | `#fdf8ec` | Warning tinted bg         |
| `--info`        | `#2980b9` | Informational             |
| `--info-10`     | `#eef6fc` | Info tinted bg            |

---

## Typography Scale

### Type Sizes

| Token          | px  | CSS var           |
|----------------|-----|-------------------|
| `text-xs`      | 12  | `--text-xs`       |
| `text-sm`      | 14  | `--text-sm`       |
| `text-base`    | 16  | `--text-base`     |
| `text-lg`      | 18  | `--text-lg`       |
| `text-xl`      | 20  | `--text-xl`       |
| `text-2xl`     | 24  | `--text-2xl`      |
| `text-3xl`     | 30  | `--text-3xl`      |
| `text-4xl`     | 36  | `--text-4xl`      |
| `text-5xl`     | 48  | `--text-5xl`      |
| `text-6xl`     | 60  | `--text-6xl`      |

### Heading Styles (Space Grotesk)

| Name       | Size | Weight | Line-height | Letter-spacing |
|------------|------|--------|-------------|----------------|
| Display    | 60px | 700    | 1.1         | -0.03em        |
| H1         | 48px | 700    | 1.15        | -0.02em        |
| H2         | 36px | 700    | 1.2         | -0.01em        |
| H3         | 30px | 600    | 1.25        | 0              |
| H4         | 24px | 600    | 1.3         | 0              |
| H5         | 20px | 600    | 1.35        | 0              |
| H6         | 18px | 600    | 1.4         | 0              |

### Body Styles (Inter)

| Name       | Size | Weight | Line-height | Color          |
|------------|------|--------|-------------|----------------|
| Body LG    | 18px | 400    | 1.75        | `--charcoal`   |
| Body Base  | 16px | 400    | 1.65        | `--charcoal`   |
| Body SM    | 14px | 400    | 1.6         | `--charcoal-80`|
| Caption    | 12px | 400    | 1.5         | `--charcoal-40`|
| Label      | 14px | 600    | 1.4         | `--charcoal`   |
| Overline   | 12px | 600    | 1.0         | `--charcoal-40`; uppercase; ls 0.08em |

### Mono Styles (JetBrains Mono)

| Name        | Size | Weight | Usage             |
|-------------|------|--------|-------------------|
| Code LG     | 16px | 400    | Code blocks       |
| Data Label  | 14px | 400    | Score values, stats|
| Meta        | 12px | 400    | Tokens, captions  |

---

## Spacing Scale (4pt grid)

| Token       | Value | CSS var       |
|-------------|-------|---------------|
| `space-1`   | 4px   | `--space-1`   |
| `space-2`   | 8px   | `--space-2`   |
| `space-3`   | 12px  | `--space-3`   |
| `space-4`   | 16px  | `--space-4`   |
| `space-5`   | 20px  | `--space-5`   |
| `space-6`   | 24px  | `--space-6`   |
| `space-8`   | 32px  | `--space-8`   |
| `space-10`  | 40px  | `--space-10`  |
| `space-12`  | 48px  | `--space-12`  |
| `space-16`  | 64px  | `--space-16`  |
| `space-20`  | 80px  | `--space-20`  |

---

## Border Radius

| Token          | Value   | CSS var          | Use                        |
|----------------|---------|------------------|----------------------------|
| `radius-sm`    | 4px     | `--radius-sm`    | Tags, badges, small inputs |
| `radius-md`    | 8px     | `--radius-md`    | Buttons, inputs            |
| `radius-lg`    | 12px    | `--radius-lg`    | Cards, dropdowns           |
| `radius-xl`    | 16px    | `--radius-xl`    | Feature cards, modals      |
| `radius-2xl`   | 24px    | `--radius-2xl`   | CTA blocks, hero panels    |
| `radius-full`  | 9999px  | `--radius-full`  | Pills, avatars, dots       |

---

## Shadows

| Token        | Value                                                                               | CSS var        |
|--------------|-------------------------------------------------------------------------------------|----------------|
| `shadow-sm`  | `0 1px 2px rgba(53,53,53,.06)`                                                      | `--shadow-sm`  |
| `shadow-md`  | `0 4px 8px -1px rgba(53,53,53,.12), 0 2px 4px -1px rgba(53,53,53,.07)`             | `--shadow-md`  |
| `shadow-lg`  | `0 12px 20px -4px rgba(53,53,53,.14), 0 4px 8px -2px rgba(53,53,53,.08)`           | `--shadow-lg`  |
| `shadow-xl`  | `0 24px 32px -6px rgba(53,53,53,.16), 0 10px 12px -4px rgba(53,53,53,.08)`         | `--shadow-xl`  |

---

## Components

### Button

```
Base: font-family heading, font-weight 600, display inline-flex, align-items center,
      border none, cursor pointer, transition 150ms cubic-bezier(0.4,0,0.2,1)
```

#### Sizes

| Size  | Font  | Padding     | Radius     |
|-------|-------|-------------|------------|
| xs    | 12px  | 4px 10px    | `--radius-sm` |
| sm    | 14px  | 7px 14px    | `--radius-md` |
| md    | 16px  | 10px 20px   | `--radius-md` |
| lg    | 18px  | 13px 28px   | `--radius-lg` |
| xl    | 20px  | 16px 36px   | `--radius-lg` |

#### Variants

| Variant       | Background      | Color          | Border                       | Hover                                |
|---------------|-----------------|----------------|------------------------------|--------------------------------------|
| primary       | `--teal`        | `--white`      | none                         | bg `--teal-light`, shadow-md, -1px Y |
| secondary     | `--navy`        | `--white`      | none                         | bg `--navy-light`, shadow-md, -1px Y |
| outline       | transparent     | `--teal`       | 2px solid `--teal`           | bg `--teal-10`                       |
| ghost         | transparent     | `--charcoal-80`| 2px solid `--silver`         | bg `--charcoal-10`, border `--silver-dark` |
| danger        | `--error`       | `--white`      | none                         | bg `#a93226`, shadow-md, -1px Y      |
| link          | none            | `--teal`       | none; underline offset 3px   | color `--teal-dark`                  |
| white         | `--white`       | `--navy`       | none                         | bg `--silver-light`, shadow-md       |
| outline-white | transparent     | `--white`      | 2px solid rgba(255,255,255,.5)| bg rgba(255,255,255,.1)             |

#### States

| State    | Style                              |
|----------|------------------------------------|
| hover    | see Variants above                 |
| active   | bg darkened variant, translateY(0) |
| disabled | opacity 0.38, pointer-events none  |
| loading  | color transparent; ::after spinner 16px, border 2px |
| focus    | outline 2px `--teal`, outline-offset 2px |

#### Icon Button

```
width: 40px, height: 40px, padding: 0
background: --charcoal-10, color: --charcoal
radius: --radius-md (square) or --radius-full (round)
hover: background --silver
```

---

### Input

```
width: 100%, padding: 10px 14px
font-family: --font-body, font-size: --text-base, color: --charcoal
background: --white, border: 1.5px solid --silver
border-radius: --radius-md, outline: none
transition: 150ms cubic-bezier(0.4,0,0.2,1)
```

#### States

| State     | Border                    | Box shadow                              | Background       |
|-----------|---------------------------|-----------------------------------------|------------------|
| default   | 1.5px `--silver`          | none                                    | `--white`        |
| focus     | 1.5px `--teal`            | 0 0 0 3px rgba(60,110,113,.12)          | `--white`        |
| error     | 1.5px `--error`           | 0 0 0 3px rgba(192,57,43,.10)           | `--white`        |
| success   | 1.5px `--success`         | none                                    | `--white`        |
| disabled  | 1.5px `--silver`          | none                                    | `--silver-light` |

- Placeholder color: `--charcoal-40`
- Disabled color: `--charcoal-40`, cursor not-allowed
- With leading icon: padding-left 40px; icon position absolute left 12px, color `--charcoal-40`
- Select: appearance none; chevron SVG right 12px; padding-right 40px
- Textarea: min-height 100px, resize vertical

#### Form Group

```
label: font-size 14px, font-weight 500, color --charcoal
hint:  font-size 12px, color --charcoal-40
error: font-size 12px, color --error
gap between elements: 8px
```

---

### Card

#### Base Card

```
background: --white
border-radius: --radius-xl (16px)
box-shadow: --shadow-md
overflow: hidden
```

| Part     | Spec                                           |
|----------|------------------------------------------------|
| Image    | height 180px, object-fit cover                 |
| Eyebrow  | 12px, 600, uppercase, ls 0.08em, color `--teal`|
| Title    | Space Grotesk, 20px, 700, color `--charcoal`   |
| Subtitle | 14px, color `--charcoal-80`                    |
| Body     | padding 20px                                   |
| Footer   | padding 16px 20px, border-top 1px `--silver-light`, flex space-between |

#### Featured Card (dark)

```
background: linear-gradient(135deg, --navy 0%, --teal-dark 100%)
border-radius: --radius-xl, padding: 32px, color: --white
decorative circles: position absolute, rgba(255,255,255,.06) and .04
```

#### Stat Card

```
background: --white, border-radius: --radius-xl
padding: 24px, box-shadow: --shadow-md
border-left: 4px solid --teal (or --navy, --warning, --error)
width: 200px
```

#### Horizontal Card

```
display: flex, background: --white, border-radius: --radius-xl
box-shadow: --shadow-md, overflow: hidden
Image column: width 140px, flex-shrink 0
Body column: padding 20px, flex 1
```

---

### Badge

```
display: inline-flex, align-items: center, gap: 4px
font-family: --font-heading, font-size: 12px, font-weight: 600
padding: 3px 10px, border-radius: --radius-full
letter-spacing: 0.03em
```

| Variant         | Background    | Color         |
|-----------------|---------------|---------------|
| teal            | `--teal-10`   | `--teal-dark` |
| navy            | `--navy-10`   | `--navy`      |
| success         | `--success-10`| `#1e8449`     |
| error           | `--error-10`  | `--error`     |
| warning         | `--warning-10`| `#b7860b`     |
| silver          | `--charcoal-10`| `--charcoal-80`|
| dark            | `--charcoal`  | `--white`     |
| outline-teal    | transparent   | `--teal`; border 1.5px `--teal` |

Status dot: 6px × 6px, border-radius 50%, matching semantic color.

---

### Tag

```
display: inline-flex, align-items: center, gap: 4px
font-size: 12px, font-weight: 500
padding: 4px 10px, border-radius: --radius-sm
background: --charcoal-10, color: --charcoal-80
border: 1px solid --silver
```

| Variant | Background   | Color       | Border                        |
|---------|--------------|-------------|-------------------------------|
| default | `--charcoal-10` | `--charcoal-80` | 1px `--silver`           |
| teal    | `--teal-10`  | `--teal`    | 1px rgba(60,110,113,.2)       |
| navy    | `--navy-10`  | `--navy`    | 1px rgba(40,75,99,.2)         |
| error   | `--error-10` | `--error`   | 1px rgba(192,57,43,.2)        |

Close icon: font-size 10px, color `--charcoal-40`; hover color `--error`.

---

### Avatar

```
border-radius: --radius-full
display: flex, align-items: center, justify-content: center
font-family: --font-heading, font-weight: 700
```

#### Sizes

| Size | Width×Height | Font-size |
|------|-------------|-----------|
| xs   | 24×24       | 10px      |
| sm   | 32×32       | 12px      |
| md   | 40×40       | 16px      |
| lg   | 56×56       | 20px      |
| xl   | 80×80       | 28px      |
| 2xl  | 112×112     | 40px      |

#### Color Variants

| Variant   | Background                                      | Color     |
|-----------|-------------------------------------------------|-----------|
| teal (default) | `--teal-10`                              | `--teal`  |
| navy      | `--navy-10`                                     | `--navy`  |
| charcoal  | `--charcoal-10`                                 | `--charcoal` |
| gradient  | linear-gradient(135deg, `--teal` 0%, `--navy` 100%) | `--white` |

- Square variant: border-radius `--radius-lg`
- Ring: box-shadow `0 0 0 3px --white, 0 0 0 5px --teal`
- Status dot: 10px × 10px, border 2px `--white`, position absolute bottom-right
  - Online: `--success`, Busy: `--error`, Offline: `--silver-dark`
- Group: margin-left -8px; border 2px `--white` on each

---

### Navbar

```
background: --white, border-bottom: 1px solid --silver
box-shadow: --shadow-sm
display: flex, align-items: center
padding: 0 24px, height: 60px, gap: 24px
border-radius: --radius-xl (when used as demo block)
```

#### Brand

```
font-family: --font-heading, font-weight: 700, font-size: 18px
color: --charcoal
Brand icon: 32×32, background --teal, border-radius --radius-md, color --white
```

#### Nav Link

```
font-size: 14px, font-weight: 500
padding: 6px 14px, border-radius: --radius-md
color: --charcoal-80 (default)
hover: background --charcoal-10, color --charcoal
active: background --teal-10, color --teal
```

#### Dark Variant

```
background: --charcoal
brand color: --white
nav link default: rgba(255,255,255,.7)
nav link hover: bg rgba(255,255,255,.08), color --white
nav link active: bg rgba(60,110,113,.3), color --teal-light
```

---

### Links

| Type     | Color       | Decoration                             | Hover            |
|----------|-------------|----------------------------------------|------------------|
| default  | `--teal`    | underline, offset 3px                  | color `--teal-dark` |
| navy     | `--navy`    | underline, offset 3px                  | color `--navy-dark` |
| subtle   | `--charcoal-80` | border-bottom 1px `--silver`, no underline | border `--charcoal`, color `--charcoal` |

---

### Divider

| Type        | Spec                                              |
|-------------|---------------------------------------------------|
| default     | height 1px, background `--silver`                 |
| thick       | height 2px, background `--silver`                 |
| dark        | height 1px, background `--charcoal-80`            |
| teal accent | height 3px, width 40px, background `--teal`, border-radius 2px |
| gradient    | height 1px, background `linear-gradient(90deg, transparent, --silver, transparent)` |
| with label  | flex row; label 12px 500 uppercase ls 0.08em `--charcoal-40`; ::before ::after lines |

---

### Progress Bar

```
Track: background --silver-light, border-radius --radius-full
Fill:  border-radius --radius-full, transition width 0.6s ease
```

#### Sizes

| Name | Height |
|------|--------|
| xs   | 4px    |
| sm   | 8px    |
| md   | 12px   |
| lg   | 20px   |

#### Fill Variants

| Variant  | Background                                        |
|----------|---------------------------------------------------|
| default  | `--teal`                                          |
| navy     | `--navy`                                          |
| gradient | `linear-gradient(90deg, --navy, --teal)`          |
| success  | `--success`                                       |
| warning  | `--warning`                                       |
| error    | `--error`                                         |

Labeled row: flex, label 14px `--charcoal-80` width 120px; track flex 1; value JetBrains Mono 12px min-width 36px text-right.

---

### Status Indicator

```
display: inline-flex, align-items: center, gap: 8px
font-size: 14px, font-weight: 500
```

Dot: 8×8px, border-radius 50%.

| State   | Dot color     | Animation   |
|---------|---------------|-------------|
| active  | `--success`   | pulse 2s    |
| pending | `--warning`   | pulse 2s    |
| offline | `--silver-dark`| none       |
| error   | `--error`     | none        |
| live    | `--error`     | pulse 2s + glow shadow rgba(192,57,43,.2) |

Pulse keyframes: `0%,100% { opacity:1; transform:scale(1) } 50% { opacity:.6; transform:scale(1.2) }`

---

### Deal-breaker Flag

```
display: inline-flex, align-items: center, gap: 8px
font-size: 12px, font-weight: 600
padding: 4px 10px, border-radius: --radius-sm
```

| Type  | Background    | Color        | Border                   |
|-------|---------------|--------------|--------------------------|
| fail  | `--error-10`  | `--error`    | 1px rgba(192,57,43,.2)   |
| pass  | `--success-10`| `#1e8449`    | 1px rgba(39,174,96,.2)   |

---

### Toast / Notification

```
display: flex, align-items: flex-start, gap: 12px
padding: 16px, border-radius: --radius-lg
box-shadow: --shadow-lg, background: --white
border-left: 4px solid [variant color]
width: 360px, font-size: 14px
```

| Part  | Spec                                    |
|-------|-----------------------------------------|
| Icon  | 20px, flex-shrink 0, margin-top 1px     |
| Title | font-weight 600, color `--charcoal`     |
| Body  | 12px, color `--charcoal-80`, margin-top 2px |
| Close | 18px, color `--charcoal-40`; hover `--charcoal` |

| Variant | Border color  |
|---------|---------------|
| info    | `--teal`      |
| success | `--success`   |
| error   | `--error`     |
| warning | `--warning`   |
| dark    | bg `--charcoal`; border `--teal-light`; title `--white`; body rgba(255,255,255,.7) |

---

### Stat Counter

```
font-family: --font-heading, font-weight: 700
letter-spacing: -0.03em (xl+), -0.02em (lg)
```

| Name       | Size | Color          |
|------------|------|----------------|
| Display    | 48px | `--charcoal` or `--teal` |
| Large      | 30px | `--charcoal`   |

- Label: 12px, 600, uppercase, ls 0.08em, `--charcoal-40`
- Delta up: 14px, 600, `--success`
- Delta down: 14px, 600, `--error`
- Description: 14px, `--charcoal-40`

---

### Score Ring (SVG)

```
SVG: 100×100, transform rotate(-90deg)
Track circle: r=42, stroke-width=8, stroke=--silver-light, fill=none
Fill circle:  r=42, stroke-width=8, stroke=--teal (or --navy/--warning/--error), fill=none
             stroke-linecap=round
             stroke-dasharray=263.9 (2π × 42)
             stroke-dashoffset = 263.9 × (1 - score/10)
Center text:  font-family Space Grotesk, 22px, dominant-baseline middle
```

Circumference: 263.9px (2 × π × 42)
Offset formula: `263.9 * (1 - score / 10)`

| Score | Offset   |
|-------|----------|
| 10.0  | 0        |
| 9.1   | 23.75    |
| 8.0   | 52.78    |
| 7.0   | 79.17    |
| 5.0   | 131.95   |
| 3.0   | 184.73   |

---

### Score Bar Row

```
Row: display flex, align-items center, gap 12px
Name: 14px, --charcoal-80, width 100px
Track: flex 1, height 8px, background --silver-light, border-radius --radius-full
Fill: height 100%, border-radius --radius-full, background --teal
Value: JetBrains Mono 12px, --charcoal-80, width 30px, text-right
```

---

### Comparison View

```
Wrapper: display flex, gap 1px, background --silver-light
         border-radius --radius-xl, overflow hidden
Column: flex 1, background --white, padding 20px
Winner column: background --teal-10
Disqualified: opacity 0.65
```

| Part    | Spec                                                    |
|---------|---------------------------------------------------------|
| Rank    | JetBrains Mono, 11px, 700, uppercase, ls 0.1em, `--charcoal-40` (winner: `--teal`) |
| Address | Space Grotesk, 16px, 600, `--charcoal`                  |
| Score   | Space Grotesk, 30px, 700, `--teal` (winner: `--teal-dark`; disq: `--error`) |
| Sub     | 12px, `--charcoal-40` (winner: `--teal`)                |

---

### CTA Block (Full)

```
background: linear-gradient(135deg, --navy 0%, --teal 100%)
border-radius: --radius-2xl, padding: 48px 40px
text-align: center, color: --white
::before overlay: radial-gradient(ellipse at 20% 50%, rgba(255,255,255,.08) 0%, transparent 60%)
```

| Part    | Spec                                              |
|---------|---------------------------------------------------|
| Title   | Space Grotesk, 36px, 700, lh 1.2                  |
| Sub     | 18px, opacity 0.8                                 |
| Buttons | flex, gap 16px, justify-content center; btn-white + btn-outline-white |

### CTA Block (Inline)

```
background: --teal-10
border: 1.5px solid rgba(60,110,113,.2)
border-radius: --radius-xl, padding: 24px 32px
display: flex, align-items: center, justify-content: space-between, flex-wrap wrap, gap 24px
```

| Part  | Spec                                                |
|-------|-----------------------------------------------------|
| Title | Space Grotesk, 20px, 700, `--charcoal`              |
| Sub   | 14px, `--charcoal-80`                               |

---

## Animation / Transition

```css
--ease: 150ms cubic-bezier(0.4, 0, 0.2, 1);
```

| Animation   | Usage                     | Keyframes                                         |
|-------------|---------------------------|---------------------------------------------------|
| spin        | Loading spinner           | `0% { transform: rotate(0) } 100% { rotate(360deg) }` · 700ms linear |
| pulse       | Live/active status dots   | `0%,100% { opacity:1; scale:1 } 50% { opacity:.6; scale:1.2 }` · 2s infinite |
| score-ring  | Ring fill on mount        | stroke-dashoffset transition 0.8s ease            |
| progress-bar| Bar fill on mount         | width transition 0.6s ease                        |
| hover lift  | Buttons on hover          | translateY(-1px) + shadow-md                      |

---

## CSS Custom Properties (full list)

```css
:root {
  /* Colors - Brand */
  --charcoal:       #353535;
  --charcoal-80:    #5a5a5a;
  --charcoal-40:    #9a9a9a;
  --charcoal-10:    #f2f2f2;
  --teal:           #3c6e71;
  --teal-light:     #4d8d91;
  --teal-dark:      #2a4f52;
  --teal-10:        #eef5f5;
  --white:          #ffffff;
  --silver:         #d9d9d9;
  --silver-dark:    #b8b8b8;
  --silver-light:   #efefef;
  --navy:           #284b63;
  --navy-light:     #3a6b8a;
  --navy-dark:      #1a3245;
  --navy-10:        #edf2f7;

  /* Colors - Semantic */
  --error:          #c0392b;
  --error-10:       #fdf0ee;
  --success:        #27ae60;
  --success-10:     #edfaf3;
  --warning:        #d4a017;
  --warning-10:     #fdf8ec;
  --info:           #2980b9;
  --info-10:        #eef6fc;

  /* Typography */
  --font-heading:   'Space Grotesk', sans-serif;
  --font-body:      'Inter', sans-serif;
  --font-mono:      'JetBrains Mono', monospace;

  /* Type Scale */
  --text-xs:    12px;
  --text-sm:    14px;
  --text-base:  16px;
  --text-lg:    18px;
  --text-xl:    20px;
  --text-2xl:   24px;
  --text-3xl:   30px;
  --text-4xl:   36px;
  --text-5xl:   48px;
  --text-6xl:   60px;

  /* Spacing */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;

  /* Radius */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm:  0 1px 2px rgba(53,53,53,.06);
  --shadow-md:  0 4px 8px -1px rgba(53,53,53,.12), 0 2px 4px -1px rgba(53,53,53,.07);
  --shadow-lg:  0 12px 20px -4px rgba(53,53,53,.14), 0 4px 8px -2px rgba(53,53,53,.08);
  --shadow-xl:  0 24px 32px -6px rgba(53,53,53,.16), 0 10px 12px -4px rgba(53,53,53,.08);

  /* Transitions */
  --ease: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

*CribCast Design System v1.0 · Space Grotesk + Inter + JetBrains Mono*
