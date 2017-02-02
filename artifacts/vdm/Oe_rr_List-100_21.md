---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_List-100_21 

<dl>
<dt>id</dt><dd> O e _ r r _ L i s t - 1 0 0 _ 2 1 </dd>
<dt>fmId</dt><dd> 1 0 0 . 2 1 </dd>
<dt>label</dt><dd> O e / r r   L i s t </dd>
<dt>location</dt><dd> ^ O R ( 1 0 0 . 2 1 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   d a t a   r e l a t e d   t o   l i s t s .     G e n e r a l l y   t h e s e   l i s t s   t a k e   t h e \ r f o r m   o f   p r o v i d e r ( s ) / p a t i e n t s .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   l i s t   b e i n g   d e f i n e d .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  u p p e r _ c a s e  |  . 1  |  U p p e r   C a s e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   l i s t   i n   u p p e r   c a s e .     U s e d   f o r   l o o k - u p .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  t y p e - 1  |  1  |  T y p e  | {::nomarkdown}  T h i s   i s   t h e   t y p e   o f   l i s t   b e i n g   d e f i n e d .     L i s t   t y p e   c u r r e n t l y   i n c l u d e s \ r t e a m   a n d   p e r s o n a l . \ r o     T e a m   l i s t s \ r           o     T M   -   M a n u a l l y   m a i n t a i n e d   ( a d d i t i o n   a n d   r e m o v a l ) \ r           o     T A   -   M a i n t a i n e d   b y   A u t o l i n k s   f o r   a d d i t i o n   a n d   r e m o v a l   o f   p a t i e n t s . \ r           o     M R A L   -   M a n u a l   r e m o v a l   o f   p a t i e n t s   f r o m   t h e   l i s t   w i t h   A u t o l i n k \ r                 a d d i t i o n   o f   p a t i e n t s   t o   t h e   l i s t . \ r   \ r o     P e r s o n a l   l i s t s \ r           o     P   -   M a n u a l l y   m a i n t a i n e d   ( a d d i t i o n   a n d   r e m o v a l ) \ r   \ r    {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>P</dt><dd>PERSONAL PATIENT</dd><dt>MRAL</dt><dd>MANUAL REMOVAL/AUTOLINK ADDITION</dd><dt>TA</dt><dd>TEAM PATIENT AUTOLINKED</dd><dt>TM</dt><dd>TEAM PATIENT MANUAL</dd></dl>{:/} | 
|  d e v i c e  |  1 . 5  |  D e v i c e  | {::nomarkdown}  D e v i c e   f r o m   t h e   D E V I C E   f i l e   l i n k e d   t o   t h e   l i s t .  {:/} |  P O I N T E R  |  |  | Device-3_5 | 
|  c r e a t o r  |  1 . 6  |  C r e a t o r  | {::nomarkdown}  T h i s   i s   t h e   I E N   o f   t h e   u s e r   w h o   c r e a t e s   t h e   T e a m   L i s t .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  c r e a t i o n _ d _ t  |  1 . 6 5  |  C r e a t i o n   D / t  | {::nomarkdown}  T h i s   f i e l d   s t o r e s   t h e   d a t e   o f   c r e a t i o n   o f   t h e   l i s t .  {:/} |  D A T E - T I M E  |  |  |  | 
|  s u b s c r i b e  |  1 . 7  |  S u b s c r i b e  | {::nomarkdown}  T h i s   f i e l d   s t o r e s   e i t h e r   a   Y   o r   N   ( f o r   Y E S   o r   N O )   e n t r y   a n d   i s   u s e d   i n \ r C P R S   t o   d e t e r m i n e   w h e t h e r   o r   n o t   i n d i v i d u a l   u s e r s   w i l l   b e   a l l o w e d   t o   a d d \ r o r   r e m o v e   t h e m s e l v e s   a s   m e m b e r s   o f   t h e   t e a m   l i s t   i f   i t   i s   o f   a u t o l i n k \ r t y p e .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
|  u s e r  |  2  |  U s e r  | {::nomarkdown}  T h e s e   a r e   t h e   u s e r ( s )   t h a t   b e l o n g   t o   t h e   l i s t .     I f   t h e   l i s t   i s   o f   t y p e \ r T E A M   P A T I E N T   o r   P E R S O N A L   P A T I E N T ,   u s e r s   o n   t h e   l i s t   m a y   r e c e i v e   c l i n i c a l   \ r n o t i f i c a t i o n s   f o r   p a t i e n t s   a l s o   o n   t h e   l i s t .  {:/} |  [ O B J E C T ]  |  |  | [User-100_212](#User-100_212)  | 
|  a u t o l i n k  |  3  |  A u t o l i n k  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   l i n k   t h e   l i s t   w i t h   W A R D s ,   R O O M - B E D s , \ r P R O V I D E R s ,   T R E A T I N G   S P E C I A L T Y s ,   o r   C L I N I C s .     T h i s   f i e l d     \ r p o i n t s   t o   t h e   e n t r y   i n   t h e   f i l e   w h e r e   t h e   l i n k   i s   t o   \ r o c c u r .     W h e n   A D T   m o v e m e n t   o c c u r   f o r   p a t i e n t s ,   t h e y   a r e \ r a d d e d   t o   t h e   a p p r o p r i a t e   O E / R R   l i s t s   a s   i d e n t i f i e d   b y   t h e \ r A U T O L I N K   f i e l d   ( v i a   \  A C \    c r o s s - r e f ) . \ r L i s t s   w i t h   a u t o l i n k   p r o v i d e r s   a r e   u p d a t e d   ( p a t i e n t   a d d e d )   w h e n   t h e   P R O V I D E R \ r l i n k   m a t c h e s   t h e   e n t r y   a t   t h e   P R I M A R Y   C A R E   P H Y S I C I A N   o r   A T T E N D I N G \ r P H Y S I C I A N   p r o m p t s .  {:/} |  [ O B J E C T ]  |  |  | [Autolink-100_213](#Autolink-100_213)  | 
|  m e m b e r  |  1 0  |  M e m b e r  | {::nomarkdown}  T h e   l i s t   m e m b e r   i s   a n   i t e m   o n   t h e   l i s t .     T h e   m e m b e r   f o r   p e r s o n a l   a n d   t e a m   \ r p a t i e n t   l i s t s   i s   a   p a t i e n t   ( i f   l i s t   t y p e   i s   P   o r   T ,   t h i s   f i e l d   p o i n t s   t o \ r t h e   p a t i e n t   f i l e . )  {:/} |  [ O B J E C T ]  |  |  | [Member-100_2101](#Member-100_2101)  | 
|  v i s i b i l i t y  |  1 1  |  V i s i b i l i t y  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   a s   a   m e a n s   t o   c o n t r o l   w h o   c a n   s e e   t h i s   l i s t   a n d   t h e   \ r p a t i e n t s   t h a t   a r e   c o n t a i n e d   w i t h i n   i t .     I f   i t   i s   s e t   t o   0 ,   t h e n   o n l y   t h e   \ r o w n e r   c a n   s e e   i t .     I f   i t   i s   s e t   t o   1 ,   t h e n   e v e r y b o d y   c a n   s e e   i t .   T h e   \ r d e f a u l t   i s   o w n e r   o n l y .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>OWNER</dd><dt>1</dt><dd>ALLUSERS</dd></dl>{:/} | 

## <a name="User-100_212"></a>User-100_212 

<dl>
<dt>id</dt><dd> U s e r - 1 0 0 _ 2 1 2 </dd>
<dt>label</dt><dd> U s e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  u s e r  |  . 0 1  |  U s e r  | {::nomarkdown}  T h i s   i s   a   u s e r   t h a t   b e l o n g s   t o   t h e   l i s t .     I f   t h e   l i s t   i s   o f   t y p e \ r T E A M   P A T I E N T   o r   P E R S O N A L   P A T I E N T ,   u s e r s   o n   t h e   l i s t   m a y   r e c e i v e   c l i n i c a l   \ r n o t i f i c a t i o n s   f o r   p a t i e n t s   a l s o   o n   t h e   l i s t .  {:/} |  P O I N T E R  |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
|  l a s t _ d a t e _ t i m e _ u s e d  |  1  |  L a s t   D a t e / t i m e   U s e d  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   t h a t   t h e   u s e r   l a s t   u s e d   t h i s   l i s t .  {:/} |  D A T E - T I M E  |  |  |  | 

## <a name="Autolink-100_213"></a>Autolink-100_213 

<dl>
<dt>id</dt><dd> A u t o l i n k - 1 0 0 _ 2 1 3 </dd>
<dt>label</dt><dd> A u t o l i n k </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a u t o l i n k  |  . 0 1  |  A u t o l i n k  | {::nomarkdown}  L i n k s   f o r   a u t o m a t i c   p a t i e n t   a d d i t i o n / r e m o v a l   b a s e d   o n   A D T   m o v e m e n t s   a n d \ r C L I N I C   e n r o l l m e n t s .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | undefined | 
|  p r i m a r y _ o r _ a t t e n d i n g  |  1  |  P r i m a r y   O r   A t t e n d i n g  | {::nomarkdown}  T h i s   f i e l d   w i l l   d e t e r m i n e   h o w   t h e   A u t o l i n k s   f o r   P r o v i d e r s   w i l l   w o r k .   I f   t h e \ r f i e l d   i s   s e t   t o ; \ r \ r \  P \    -   P r i m a r y :     T h e   a u t o l i n k   w i l l   a d d   p a t i e n t s   t o   t h e   l i s t   t h a t   h a v e   t h e \ r p o i n t e d   t o   p r o v i d e r   a s s i g n e d   t o   t h e m   t h r u   t h e   M A S   o p t i o n s   a s   P R O V I D E R . \ r \ r \  A \    -   A t t e n d i n g :     T h e   a u t o l i n k   w i l l   a d d   p a t i e n t s   t o   t h e   l i s t   t h a t   h a v e   t h e \ r p o i n t e d   t o   p r o v i d e r   a s s i g n e d   t o   t h e m   t h r u   t h e   M A S   o p t i o n s   a s   A T T E N D I N G \ r P H Y S I C I A N . \ r \ r \  B \    -   B o t h :     T h e   a u t o l i n k   w i l l   a d d   p a t i e n t s   t o   t h e   l i s t   t h a t   h a v e   t h e   p o i n t e d \ r t o   p r o v i d e r   a s s i g n e d   t o   t h e m   t h r u   t h e   M A S   o p t i o n s   a s     ' P R O V I D E R '   a n d   t h o s e \ r p a t i e n t s   t h a t   h a v e   t h e   p o i n t e d   t o   p r o v i d e r   a s s i g n e d   t o   t h e m   a s   A T T E N D I N G \ r P H Y S I C I A N .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>A</dt><dd>attending</dd><dt>P</dt><dd>primary</dd><dt>B</dt><dd>both</dd></dl>{:/} | 

## <a name="Member-100_2101"></a>Member-100_2101 

<dl>
<dt>id</dt><dd> M e m b e r - 1 0 0 _ 2 1 0 1 </dd>
<dt>label</dt><dd> M e m b e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  m e m b e r  |  . 0 1  |  M e m b e r  | {::nomarkdown}  A n   i t e m   o n   t h e   l i s t ,   m e m b e r   i s   a   p a t i e n t   i f   t h e   l i s t   t y p e   i s   P   o r   T .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
|  v i e w _ d a t e _ t i m e  |  1  |  V i e w   D a t e / t i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   t h i s   i t e m   w a s   l a s t   v i e w e d .  {:/} |  D A T E - T I M E  |  |  |  | 
|  n o t i f i c a t i o n _ s e l e c t i o n  |  2  |  * n o t i f i c a t i o n   S e l e c t i o n  | {::nomarkdown}  T h i s   f i e l d   i s   u n u s e d   a n d   w i l l   b e   d e l e t e d   p o s t - C P R S   1 .  {:/} |  [ P O I N T E R ]  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}