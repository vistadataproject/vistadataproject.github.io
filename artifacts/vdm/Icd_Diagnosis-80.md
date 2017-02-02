---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Icd_Diagnosis-80 

<dl>
<dt>id</dt><dd> I c d _ D i a g n o s i s - 8 0 </dd>
<dt>fmId</dt><dd> 8 0 </dd>
<dt>label</dt><dd> I c d   D i a g n o s i s </dd>
<dt>location</dt><dd> ^ I C D 9 ( </dd>
<dt>description</dt><dd>  I C D   D i a g n o s i s   f i l e   # 8 0   c o n t a i n s   c o d e s   f r o m   t h e   I n t e r n a t i o n a l   \ r C l a s s i f i c a t i o n   o f   D i s e a s e s   ( I C D )   C l i n i c a l   M o d i f i c a t i o n   ( C M )   \ r p r o v i d e d   b y   t h e   C e n t e r s   f o r   M e d i c a r e   a n d   M e d i c a i d   S e r v i c e s   \ r ( C M S )   a n d   t h e   N a t i o n a l   C e n t e r   f o r   H e a l t h   S t a t i s t i c s   ( N C H S ) . \ r T h i s   f i l e   c o n t a i n s   b o t h   t h e   9 t h   ( I C D - 9 - C M )   a n d   1 0 t h   ( I C D - 1 0 - C M ) \ r R e v i s i o n s . \ r   \ r I f   a n   e n t r y   n e e d s   t o   b e   a d d e d ,   m o d i f i e d   o r   d e l e t e d ,   a   p a t c h   w i l l \ r b e   i s s u e d   c o n t a i n i n g   t h e   c h a n g e . \ r   \ r T h i s   t a b l e   f i l e   s h o u l d   N O T   b e   e d i t e d   i n   a n y w a y   b y   t h e   s i t e .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  c o d e _ n u m b e r  |  . 0 1  |  C o d e   N u m b e r  | {::nomarkdown}  I C D - 9   o r   I C D - 1 0   C o d e  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  c o d i n g _ s y s t e m  |  1 . 1  |  C o d i n g   S y s t e m  | {::nomarkdown}  T h i s   i s   t h e   c o d i n g   s y s t e m   t o   w h i c h   t h e   c o d e   b e l o n g s .  {:/} |  P O I N T E R  |  |  | Icd_Coding_Systems-80_4 | 
|  p d x _ e x c l u s i o n _ c o d e  |  1 . 1 1  |  P d x   E x c l u s i o n   C o d e  | {::nomarkdown}  T h i s   i s   a   P r i m a r y   D i a g n o s i s   E x c l u s i o n   C o d e   \ r ( f i l e   # 8 2 . 1 3 )   c o n t a i n i n g   a   l i s t   o f   D i a g n o s i s   \ r c o d e s   t h a t ,   w h e n   u s e d   a s   t h e   p r i m a r y   d i a g n o s i s \ r c o d e   w i t h   t h i s   c o d e   w i l l   c a u s e   t h e   C C   \ r ( C o m p l i c a t i o n / C o m o r b i d i t y )   t o   b e   z e r o   ( m e a n i n g \ r \  n o   C C \  ) .      {:/} |  P O I N T E R  |  |  | Drg_Cc_Exclusions-82_13 | 
|  i d e n t i f i e r  |  1 . 2  |  I d e n t i f i e r  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   I d e n t i f i e r   c o d e s   p r o v i d i n g   m o r e   d e t a i l   o n   \ r t h e   D R G .  {:/} |  S T R I N G  |  |  |  | 
|  u n a c c e p t a b l e _ a s _ p r i n c i p a l _ d x  |  1 . 3  |  U n a c c e p t a b l e   A s   P r i n c i p a l   D x  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   f l a g   i n d i c a t i n g   t h a t   t h i s   c o d e   i s   \ r u n a c c e p t a b l e   a s   t h e   p r i n c i p a l   d i a g n o s i s .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
|  m d c 1 3  |  1 . 4  |  M d c 1 3  | {::nomarkdown}  F i e l d   i s   s e t   t o   1 3   w h e n   t h e   M a j o r   D i a g n o s t i c   C o d e   ( M D C )   \ r e q u a l s   1 3   ( F e m a l e   R e p r o d u c t i v e   S y s t e m )  {:/} |  N U M E R I C  |  |  |  | 
|  m d c 2 4  |  1 . 5  |  M d c 2 4  | {::nomarkdown}  C o d e   e n t r y   o f   b o d y   s i t e   o f   M u l t i p l e   S i g n i f i c a n t   T r a u m a .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>5</dt><dd>URINARY</dd><dt>1</dt><dd>HEAD</dd><dt>7</dt><dd>UPPER LIMB</dd><dt>2</dt><dd>CHEST</dd><dt>3</dt><dd>ABDOMEN</dd><dt>0</dt><dd>PRINCIPAL DX</dd><dt>6</dt><dd>PELVIS</dd><dt>4</dt><dd>KIDNEY</dd><dt>8</dt><dd>LOWER LIMB</dd></dl>{:/} | 
|  m d c 2 5  |  1 . 6  |  M d c 2 5  | {::nomarkdown}  S e t   o f   c o d e s   r e f e r s   t o   t y p e   o f   H I V   c o d e   o r   r e l a t e d   c o n d i t i o n .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>3</dt><dd>NON-MAJOR HIV CONDITION</dd><dt>2</dt><dd>MAJOR HIV CONDITION</dd><dt>1</dt><dd>HIV INFECTION</dd></dl>{:/} | 
|  i c d _ e x p a n d e d  |  1 . 7  |  I c d   E x p a n d e d  | {::nomarkdown}  T h i s   f i e l d   i s   a   f l a g   i n d i c a t i n g   t h a t   t h e   I C D   c o d e   w a s   e x p a n d e d   \ r b y   t h e   V A   ( l o c a l   c o d e ) .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  p o a _ e x e m p t  |  1 . 9  |  P o a   E x e m p t  | {::nomarkdown}  T h e   v a l u e   i n   t h i s   f i e l d   i s   u s e d   t o   d e t e r m i n e \ r w h e t h e r   P r e s e n t   O n   A d m i s s i o n   ( P O A )   p r o c e s s i n g \ r a p p l i e s   t o   t h i s   c o d e .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>Not POA Exempt</dd><dt>1</dt><dd>POA Exempt</dd></dl>{:/} | 
|  s e x  |  1 0  |  S e x  | {::nomarkdown}  T h i s   i s   a   h i s t o r y   o f   t h e   S e x   d e s i g n a t i o n   ( M a l e / F e m a l e )   f o r   t h e   \ r d i a g n o s i s   a n d   i n c l u d e s   t h e   S e x   w i t h   t h e   d a t e   i t   b e c a m e   e f f e c t i v e .  {:/} |  [ O B J E C T ]  |  |  | [Sex-80_04](#Sex-80_04)  | 
|  a g e _ l o w  |  1 1  |  A g e   L o w  | {::nomarkdown}  T h i s   i s   a   h i s t o r y   o f   l o w e s t   a g e   r e a s o n a b l e   f o r \ r a   p r o c e d u r e   a n d   i n c l u d e s   t h e   l o w e s t   a g e   a n d   t h e \ r d a t e   i t   b e c a m e   e f f e c t i v e .    {:/} |  [ O B J E C T ]  |  |  | [Age_Low-80_011](#Age_Low-80_011)  | 
|  a g e _ h i g h  |  1 2  |  A g e   H i g h  | {::nomarkdown}  T h i s   i s   a   h i s t o r y   o f   h i g h e s t   a g e   r e a s o n a b l e   f o r \ r a   p r o c e d u r e   a n d   i n c l u d e s   t h e   h i g h e s t   a g e   a n d   t h e \ r d a t e   i t   b e c a m e   e f f e c t i v e .    {:/} |  [ O B J E C T ]  |  |  | [Age_High-80_012](#Age_High-80_012)  | 
|  i c d _ c o d e s _ n o t _ t o _ u s e _ w i t h  |  2 0  |  I c d   C o d e s   N o t   T o   U s e   W i t h  | {::nomarkdown}  T h i s   i s   a   l i s t i n g   o f   I C D   c o d e s   t h a t   c a n n o t   b e   u s e d   i n   c o n j u n c t i o n \ r w i t h   t h i s   c o d e .  {:/} |  [ P O I N T E R ]  |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
|  i c d _ c o d e s _ r e q u i r e d _ w i t h  |  3 0  |  I c d   C o d e s   R e q u i r e d   W i t h  | {::nomarkdown}  T h i s   i s   a   l i s t i n g   o f   I C D   c o d e s   r e q u i r e d   w h e n   t h i s   c o d e   i s   u s e d .  {:/} |  [ P O I N T E R ]  |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
|  i c d _ c o d e s _ n o t _ c c _ w i t h  |  4 0  |  I c d   C o d e s   N o t   C c   W i t h  | {::nomarkdown}  T h i s   i s   a   l i s t i n g   o f   c o d e s   n o t   c o n s i d e r e d   a s   C o m p l i c a t i o n / c o m o r b i d i t y \ r w i t h   t h i s   c o d e .  {:/} |  [ P O I N T E R ]  |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
|  s t a t u s  |  6 6  |  S t a t u s  | {::nomarkdown}  T h i s   m u l t i p l e   c o n t a i n s   v e r s i o n e d   i n f o r m a t i o n   f o r   a n   I C D   c o d e . \ r A   n e w   e n t r y   i s   c r e a t e d   w h e n e v e r   a n   I C D   c o d e ' s   s t a t u s   i s   c h a n g e d .  {:/} |  [ O B J E C T ]  |  |  | [Status-80_066](#Status-80_066)  | 
|  d i a g n o s i s  |  6 7  |  D i a g n o s i s  | {::nomarkdown}  T h i s   i s   a   h i s t o r y   o f   t h e   D i a g n o s i s   ( s h o r t   t e x t )   t o   i n c l u d e   t h e   d a t e   t h e   \ r t e x t   w a s   f i r s t   u s e d   a l o n g   w i t h   t h e   t e x t .  {:/} |  [ O B J E C T ]  |  |  | [Diagnosis-80_067](#Diagnosis-80_067)  | 
|  d e s c r i p t i o n  |  6 8  |  D e s c r i p t i o n  | {::nomarkdown}  T h i s   i s   a   h i s t o r y   o f   t h e   d e s c r i p t i v e \ r t e x t   t o   i n c l u d e   t h e   d a t e   t h e   t e x t   \ r w a s   f i r s t   u s e d   a n d   t h e   t e x t   u s e d .  {:/} |  [ O B J E C T ]  |  |  | [Description-80_068](#Description-80_068)  | 
|  d r g _ g r o u p e r  |  7 1  |  D r g   G r o u p e r  | {::nomarkdown}  T h i s   f i e l d   s e t s   t h e   e f f e c t i v e   d a t e   f o r   t h e   D R G s   f o r   a   g i v e n   f i s c a l   y e a r .   \ r I t   s h o u l d   n o r m a l l y   b e   t h e   f i r s t   d a y   o f   O c t o b e r   o f   t h e   f i s c a l   y e a r .   E a c h \ r y e a r   a   n e w   e n t r y   w i l l   b e   c r e a t e d   a n d   t h e   D R G ' s   h i e r a c h y   w i l l   r e s i d e   w i t h i n \ r t h i s   f i e l d .  {:/} |  [ O B J E C T ]  |  |  | [Drg_Grouper-80_071](#Drg_Grouper-80_071)  | 
|  m a j o r _ d i a g n o s t i c _ c a t e g o r y  |  7 2  |  M a j o r   D i a g n o s t i c   C a t e g o r y  | {::nomarkdown}  T h i s   i s   a   l i s t i n g   o f   M a j o r   D i a g n o s t i c   C a t e g o r i e s   ( M D C )   a s s o c i a t e d \ r w i t h   t h i s   I C D   D i a g n o s i s   b y   f i s c a l   y e a r .  {:/} |  [ O B J E C T ]  |  |  | [Major_Diagnostic_Category-80_072](#Major_Diagnostic_Category-80_072)  | 
|  d r g _ d i a g n o s i s _ i d e n t i f i e r _ c o d e s  |  7 3  |  D r g   D i a g n o s i s   I d e n t i f i e r   C o d e s  | {::nomarkdown}  T h i s   i s   a   l i s t i n g   o f   i d e n t i f i e r   c o d e s   u s e d   i n \ r t h e   D R G   r u l e s   p r o c e s s i n g   t o   d e t e r m i n e   D R G .  {:/} |  [ P O I N T E R ]  |  |  | Drg_Diagnosis_Identifier_Codes-82 | 
|  c o m p l i c a t i o n _ c o m o r b i d i t y  |  1 0 3  |  C o m p l i c a t i o n / c o m o r b i d i t y  | {::nomarkdown}  T h i s   i s   a   h i s t o r y   o f   t h e   C o m p l i c a t i o n / C o m o r b i d i t y   ( C C )   d e s i g n a t i o n \ r f o r   t h e   d i a g n o s i s   a n d   i n c l u d e s   t h e   C C   d e s i g n a t i o n   w i t h   t h e   d a t e   \ r i t   b e c a m e   e f f e c t i v e .      {:/} |  [ O B J E C T ]  |  |  | [Complication_comorbidity-80_0103](#Complication_comorbidity-80_0103)  | 

## <a name="Sex-80_04"></a>Sex-80_04 

<dl>
<dt>id</dt><dd> S e x - 8 0 _ 0 4 </dd>
<dt>label</dt><dd> S e x </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s e x _ e f f e c t i v e _ d a t e  |  . 0 1  |  S e x   E f f e c t i v e   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   t h e   S e x   d e s i g n a t i o n   ( F / M )   b e c a m e   e f f e c t i v e .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s e x  |  1  |  S e x  | {::nomarkdown}  T h i s   i s   t h e   s e x   d e s i g n a t i o n   f o r   t h e   d i a g n o s i s .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>N</dt><dd>N/A</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 

## <a name="Age_Low-80_011"></a>Age_Low-80_011 

<dl>
<dt>id</dt><dd> A g e _ L o w - 8 0 _ 0 1 1 </dd>
<dt>label</dt><dd> A g e   L o w </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a g e _ l o w _ e f f e c t i v e _ d a t e  |  . 0 1  |  A g e   L o w   E f f e c t i v e   D a t e  | {::nomarkdown}  T h e   d a t e   t h a t   t h e   A G E   L O W   l i m i t   w a s   e f f e c t i v e .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  a g e _ l o w  |  1  |  A g e   L o w  | {::nomarkdown}  T h i s   i s   t h e   m i n i m u m   a g e   v a l u e   f o r   a n   a g e   r a n g e   f o r   w h i c h \ r t h e   c o d e   c a n   b e   a p p l i e d .     B l a n k   o t h e r w i s e .  {:/} |  N U M E R I C  |  |  |  | 

## <a name="Age_High-80_012"></a>Age_High-80_012 

<dl>
<dt>id</dt><dd> A g e _ H i g h - 8 0 _ 0 1 2 </dd>
<dt>label</dt><dd> A g e   H i g h </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a g e _ h i g h _ e f f e c t i v e _ d a t e  |  . 0 1  |  A g e   H i g h   E f f e c t i v e   D a t e  | {::nomarkdown}  T h e   d a t e   t h a t   t h e   A G E   H I G H   l i m i t   w a s   e f f e c t i v e .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  a g e _ h i g h  |  1  |  A g e   H i g h  | {::nomarkdown}  T h i s   i s   t h e   m a x i m u n   a g e   v a l u e   f o r   a n   a g e   r a n g e   f o r   w h i c h \ r t h e   c o d e   c a n   b e   a p p l i e d .     B l a n k   o t h e r w i s e .  {:/} |  N U M E R I C  |  |  |  | 

## <a name="Status-80_066"></a>Status-80_066 

<dl>
<dt>id</dt><dd> S t a t u s - 8 0 _ 0 6 6 </dd>
<dt>label</dt><dd> S t a t u s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s t a t u s _ e f f e c t i v e _ d a t e  |  . 0 1  |  S t a t u s   E f f e c t i v e   D a t e  | {::nomarkdown}  D a t e   v e r s i o n e d   i n f o r m a t i o n   b e c o m e s / b e c a m e   e f f e c t i v e .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s t a t u s  |  . 0 2  |  S t a t u s  | {::nomarkdown}  S t a t u s   s e t   t o   1   w h e n   t h e   c o d e   i s   a c t i v e   a n d   0   w h e n   t h e   c o d e \ r i s   i n a c t i v e .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

## <a name="Diagnosis-80_067"></a>Diagnosis-80_067 

<dl>
<dt>id</dt><dd> D i a g n o s i s - 8 0 _ 0 6 7 </dd>
<dt>label</dt><dd> D i a g n o s i s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d i a g n o s i s _ e f f e c t i v e _ d a t e  |  . 0 1  |  D i a g n o s i s   E f f e c t i v e   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   t h e   d i a g n o s i s   t e x t   w a s   f i r s t   u s e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  d i a g n o s i s  |  1  |  D i a g n o s i s  | {::nomarkdown}  T h i s   i s   t h e   D i a g n o s i s   ( s h o r t   t e x t ) .  {:/} |  S T R I N G  |  | REQUIRED |  | 

## <a name="Description-80_068"></a>Description-80_068 

<dl>
<dt>id</dt><dd> D e s c r i p t i o n - 8 0 _ 0 6 8 </dd>
<dt>label</dt><dd> D e s c r i p t i o n </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d e s c r i p t i o n _ e f f e c t i v e _ d a t e  |  . 0 1  |  D e s c r i p t i o n   E f f e c t i v e   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   t h e   d e s c r i p t i o n   w a s   f i r s t   u s e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  d e s c r i p t i o n  |  1  |  D e s c r i p t i o n  | {::nomarkdown}  T h i s   i s   t h e   d e s c r i p t i o n   ( l o n g   t e x t )   t h a t   w a s   i n   u s e   o n   t h e   e f f e c t i v e   \ r d a t e .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  s u p p l e m e n t a l  |  2  |  S u p p l e m e n t a l  | {::nomarkdown}  T h i s   i s   a   l i s t   o f   S u p p l e m e n t a l   k e y w o r d s \ r w h i c h   s h o u l d   b e   i n c l u d e d   i n   t h e   w o r d   \ r i n d e x   t o   a s s i s t   i n   l o o k - u p   o p e r a t i o n s .  {:/} |  [ S T R I N G ]  |  |  |  | 

## <a name="Drg_Grouper-80_071"></a>Drg_Grouper-80_071 

<dl>
<dt>id</dt><dd> D r g _ G r o u p e r - 8 0 _ 0 7 1 </dd>
<dt>label</dt><dd> D r g   G r o u p e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d r g _ g r o u p e r _ e f f e c t i v e _ d a t e  |  . 0 1  |  D r g   G r o u p e r   E f f e c t i v e   D a t e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   e f f e c t i v e   d a t e   f o r   t h e   D R G s   f o r   a   \ r f i s c a l   y e a r .     I t   s h o u l d   n o r m a l l y   b e   t h e   f i r s t   d a y   o f   O c t o b e r \ r o f   t h e   f i s c a l   y e a r .   E a c h   y e a r   a   n e w   e n t r y   w i l l   b e   c r e a t e d   a n d \ r t h e   D R G ' s   h i e r a r c h y   w i l l   r e s i d e   w i t h i n   t h i s   f i e l d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  d r g  |  1  |  D r g  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a l l   o f   t h e   D R G s   a s s o c i a t e d   w i t h   t h e   c o r r e s p o n d i n g   \ r I C D   D i a g n o s i s   f o r   t h e   f i s c a l   y e a r   i n d i c a t e d   b y   t h e   D R G   G r o u p e r   \ r e f f e c t i v e   d a t e .  {:/} |  [ P O I N T E R ]  |  |  | Drg-80_2 | 

## <a name="Major_Diagnostic_Category-80_072"></a>Major_Diagnostic_Category-80_072 

<dl>
<dt>id</dt><dd> M a j o r _ D i a g n o s t i c _ C a t e g o r y - 8 0 _ 0 7 2 </dd>
<dt>label</dt><dd> M a j o r   D i a g n o s t i c   C a t e g o r y </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  m d c _ e f f e c t i v e _ d a t e  |  . 0 1  |  M d c   E f f e c t i v e   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   t h a t   t h e   M a j o r   D i a g n o s t i c   C a t e g o r i e s   b e c a m e \ r e f f e c t i v e   f o r   t h i s   d i a g n o s i s .     T h i s   i s   n o r m a l l y   t h e   b e g i n n i n g \ r o f   a   f i s c a l   y e a r .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  m d c  |  1  |  M d c  | {::nomarkdown}  T h i s   i s   a   s i n g l e   M a j o r   D i a g n o s t i c   C a t e g o r y   c o d e   a s s o c i a t e d   w i t h   t h e   \ r c o r r e s p o n d i n g   I C D   D i a g n o s i s   f o r   t h e   f i s c a l   y e a r   i n d i c a t e d   b y   t h e   M C D \ r e f f e c t i v e   d a t e .  {:/} |  P O I N T E R  |  |  | Major_Diagnostic_Category-80_3 | 

## <a name="Complication_comorbidity-80_0103"></a>Complication_comorbidity-80_0103 

<dl>
<dt>id</dt><dd> C o m p l i c a t i o n _ c o m o r b i d i t y - 8 0 _ 0 1 0 3 </dd>
<dt>label</dt><dd> C o m p l i c a t i o n / c o m o r b i d i t y </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  c c _ e f f e c t i v e _ d a t e  |  . 0 1  |  C c   E f f e c t i v e   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   t h a t   a   C o m p l i c a t i o n / C o m o r b i d i t y   ( C C )   d e s i g n a t i o n \ r b e c a m e   e f f e c t i v e .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  c o m p l i c a t i o n _ c o m o r b i d i t y  |  1  |  C o m p l i c a t i o n / c o m o r b i d i t y  | {::nomarkdown}  T h i s   i s   t h e   C o m p l i c a t i o n / C o m o r b i d i t y   ( C C )   \ r d e s i g n a t i o n   f o r   t h e   d i a g n o s i s .     I t   i n c l u d e s   \ r C o m p l i c a t i o n / C o m o r b i d i t y   ( C C ) ,   M a j o r   \ r C o m p l i c a t i o n / C o m o r b i d i t y   ( M C C ) ,   M a j o r   \ r C o m p l i c a t i o n / C o m o r b i d i t y   w h e n   p a t i e n t   i s   \ r d i s c h a r g e d   a l i v e   a n d   n o n - C o m p l i c a t i o n / C o m o r b i d i t y \ r ( n o   c o m p l i c a t i o n s / c o r m o r b i d i t i e s )  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>CC</dd><dt>3</dt><dd>MCC when patient is discharged alive</dd><dt>2</dt><dd>MCC</dd><dt>0</dt><dd>non-CC</dd></dl>{:/} | 
|  p r i m a r y  |  2  |  P r i m a r y  | {::nomarkdown}  T h e   v a l u e   i n   t h i s   f i e l d   i s   u s e d   t o   d e t e r m i n e \ r w h e t h e r   C C / M C C   v a l u e   i s   t a k e n   f r o m   p r i m a r y   \ r d i a g n o s i s   i n s t e a d   o f   t h e   s e c o n d a r y   d i a g n o s i s .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>Primary DX is own CC/MCC</dd><dt>0</dt><dd>Primary DX is not own CC/MCC</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}