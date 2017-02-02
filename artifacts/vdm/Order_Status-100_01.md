---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Status-100_01 

<dl>
<dt>id</dt><dd> O r d e r _ S t a t u s - 1 0 0 _ 0 1 </dd>
<dt>fmId</dt><dd> 1 0 0 . 0 1 </dd>
<dt>label</dt><dd> O r d e r   S t a t u s </dd>
<dt>location</dt><dd> ^ O R D ( 1 0 0 . 0 1 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   t h e   p o s s i b l e   s t a t u s e s   t h a t   m a y   b e   a s s o c i a t e d   w i t h \ r a n   o r d e r   i n   O E / R R . \ r   \ r P e r   V H A   D i r e c t i v e   2 0 0 5 - 0 4 4 ,   t h i s   f i l e   h a s   b e e n   \  l o c k e d   d o w n \    b y   D a t a   \ r S t a n d a r d i z a t i o n   ( D S ) .     T h e   f i l e   d e f i n i t i o n   ( i . e .   d a t a   d i c t i o n a r y )   s h a l l   \ r n o t   b e   m o d i f i e d .     A l l   a d d i t i o n s ,   c h a n g e s   a n d   d e l e t i o n s   t o   e n t r i e s   i n   t h e   \ r f i l e   s h a l l   b e   d o n e   b y   E n t e r p r i s e   R e f e r e n c e   T e r m i n o l o g y   ( E R T )   u s i n g   t h e   \ r M a s t e r   F i l e   S e r v e r   ( M F S ) ,   p r o v i d e d   b y   C o m m o n   S e r v i c e s   ( C S ) .       C r e a t i n g   \ r a n d / o r   e d i t i n g   l o c a l l y   d e f i n e d   f i e l d s   i n   t h e   f i l e   a r e   n o t   p e r m i t t e d .     U s e   \ r o f   l o c a l l y   d e f i n e d   f i e l d s   t h a t   w e r e   c r e a t e d   p r i o r   t o   V H A   D i r e c t i v e   \ r 2 0 0 5 - 0 4 4   s h a l l   n o t   b e   s u p p o r t e d .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n u m b e r  |  . 0 0 1  |  N u m b e r  | {::nomarkdown}  T h i s   i s   t h e   n u m b e r   o f   t h e   s t a t u s   e n t r y . \ r A l l   e n t r i e s   a r e   r e s e r v e d .  {:/} |  I E N  |  |  |  | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   s t a t u s .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  s h o r t _ n a m e  |  . 0 2  |  S h o r t   N a m e  | {::nomarkdown}  T h i s   i s   a   s h o r t e r   v e r s i o n   o f   t h e   s t a t u s   n a m e   t o   b e   d i s p l a y e d   o n   t h e \ r O r d e r s   t a b   o f   t h e   C P R S   C h a r t .  {:/} |  S T R I N G  |  |  |  | 
|  a b b r e v i a t i o n  |  . 1  |  A b b r e v i a t i o n  | {::nomarkdown}  T h i s   i s   t h e   a b b r e v i a t i o n   o f   t h e   s t a t u s   t o   b e   d i s p l a y e d   o n   o r d e r \ r r e v i e w s   a n d   p r i n t o u t s . \ r T h e   a b b r e v i a t i o n   i s   p l a c e d   i n   i t s   o w n   n o d e   o f   t h e   g l o b a l   a n d   t h e   e n t i r e \ r n o d e   i s   r e s e r v e d .     T h i s   a l l o w s   f o r   t h e   p o s s i b i l i t y   o f   a n   a b b r e v i a t i o n \ r w h i c h   c o n t a i n s   a n   u p   a r r o w .  {:/} |  S T R I N G  |  |  |  | 
|  d e s c r i p t i o n  |  2  |  D e s c r i p t i o n  | {::nomarkdown}  T h i s   i s   t h e   d e s c r i p t i o n   o f   t h e   s t a t u s .  {:/} |  S T R I N G  |  |  |  | 
|  m a s t e r _ e n t r y _ f o r _ v u i d  |  9 9 . 9 8  |  M a s t e r   E n t r y   F o r   V U I D  | {::nomarkdown}  T h i s   f i e l d   i d e n t i f i e s   t h e   M a s t e r   e n t r y   f o r   a   V U I D   a s s o c i a t e d   w i t h   a   \ r T e r m / C o n c e p t .  {:/} |  B O O L E A N  |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  v u i d  |  9 9 . 9 9  |  V U I D  | {::nomarkdown}  V H A   U n i q u e   I D   ( V U I D ) .   A   u n i q u e   m e a n i n g l e s s   i n t e g e r   a s s i g n e d   t o   r e f e r e n c e \ r t e r m s   V H A   w i d e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  e f f e c t i v e _ d a t e _ t i m e  |  9 9 . 9 9 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  D e s c r i b e s   t h e   p a i r   S t a t u s   a n d   E f f e c t i v e   D a t e / T i m e   f o r   e a c h   r e f e r e n c e   t e r m .  {:/} |  [ O B J E C T ]  |  |  | [Effective_Date_time-100_0199](#Effective_Date_time-100_0199)  | 

## <a name="Effective_Date_time-100_0199"></a>Effective_Date_time-100_0199 

<dl>
<dt>id</dt><dd> E f f e c t i v e _ D a t e _ t i m e - 1 0 0 _ 0 1 9 9 </dd>
<dt>label</dt><dd> E f f e c t i v e   D a t e / t i m e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e f f e c t i v e _ d a t e _ t i m e  |  . 0 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   w h e n   t h e   S t a t u s   o f   t h e   r e f e r e n c e   t e r m   w a s   e s t a b l i s h e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s t a t u s  |  . 0 2  |  S t a t u s  | {::nomarkdown}  T h e   S t a t u s   o f   a   r e f e r e n c e   t e r m   i s   e i t h e r   ' A C T I V E '   o r   ' I N A C T I V E ' .     I f   \ r ' A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   b e   a c c e s s i b l e   b y   e n d - u s e r s   t o   d o c u m e n t   a   \ r p a r t i c u l a r   p a t i e n t   e v e n t .     I f   ' I N A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   o n l y   b e   \ r a c c e s s i b l e   b y   t h e   a p p l i c a t i o n   t o   d i s p l a y   l e g a c y   d a t a .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}