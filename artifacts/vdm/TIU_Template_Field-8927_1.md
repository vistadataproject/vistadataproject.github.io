---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; TIU_Template_Field-8927_1 

<dl>
<dt>id</dt><dd> T I U _ T e m p l a t e _ F i e l d - 8 9 2 7 _ 1 </dd>
<dt>fmId</dt><dd> 8 9 2 7 . 1 </dd>
<dt>label</dt><dd> T I U   T e m p l a t e   F i e l d </dd>
<dt>location</dt><dd> ^ T I U ( 8 9 2 7 . 1 , </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  U n i q u e   D i a l o g   F i e l d   N a m e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  t y p e - _ 0 2  |  . 0 2  |  T y p e  | {::nomarkdown}  T y p e   o f   t e m p l a t e   f i e l d .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>R</dt><dd>Radio Buttons</dd><dt>X</dt><dd>Check Boxes</dd><dt>H</dt><dd>Hyperlink</dd><dt>T</dt><dd>Text</dd><dt>B</dt><dd>Button</dd><dt>N</dt><dd>Numeric</dd><dt>W</dt><dd>Word Processing</dd><dt>D</dt><dd>Date</dd><dt>C</dt><dd>Combo Box</dd><dt>E</dt><dd>Edit Box</dd></dl>{:/} | 
|  i n a c t i v e  |  . 0 3  |  I n a c t i v e  | {::nomarkdown}  D i s a b l e   t e m p l a t e   f i e l d  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  l e n g t h  |  . 0 4  |  L e n g t h  | {::nomarkdown}  T h i s   i s   t h e   d i s p l a y   l e n g t h   o f   e d i t   a n d   c o m b o   b o x e s .  {:/} |  N U M E R I C  |  |  |  | 
|  d e f a u l t _ t e x t  |  . 0 5  |  D e f a u l t   T e x t  | {::nomarkdown}  D e f a u l t   t e x t .  {:/} |  S T R I N G  |  |  |  | 
|  l i s t _ m a n a g e r _ t e x t  |  . 0 6  |  L i s t   M a n a g e r   T e x t  | {::nomarkdown}  T h i s   i s   t h e   t e x t   t o   i n s e r t   i n t o   a   b o i l e r p l a t e   w h e n   e x p a n d e d   f r o m \ r a   l i s t   m a n a g e r   i n t e r f a c e .  {:/} |  S T R I N G  |  |  |  | 
|  d e f a u l t _ i n d e x  |  . 0 7  |  D e f a u l t   I n d e x  | {::nomarkdown}  L i n e   #   o f   d e f a u l t   i t e m   i n   t h e   I T E M S   f i e l d .  {:/} |  N U M E R I C  |  |  |  | 
|  r e q u i r e d  |  . 0 8  |  R e q u i r e d  | {::nomarkdown}  I n d i c a t e s   t h a t   e n t r y   i n t o   t h e   t e m p l a t e   f i e l d   i s   r e q u i r e d .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  s e p a r a t e _ l i n e s  |  . 0 9  |  S e p a r a t e   L i n e s  | {::nomarkdown}  T h i s   f i e l d   d e t e r m i n e s   i f   C h e c k   B o x   o r   R a d i o   G r o u p   f i e l d s   s h o u l d   b e \ r d i s p l a y e d   o n   s e p a r a t e   l i n e s ,   o r   i f   t h e y   s h o u l d   w r a p .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  m a x _ l e n g t h  |  . 1  |  M a x   L e n g t h  | {::nomarkdown}  T h i s   i s   t h e   m a x i m u m   n u m b e r   o f   c h a r a c t e r s   t h a t   c a n   b e   t y p e d \ r i n   a n   e d i t   b o x   o r   c o m b o   b o x .     T h i s   c a n   b e   l o n g e r   t h a n   t h e \ r L e n g t h   f i e l d ,   w h i c h   i s   t h e   d i s p l a y   w i d t h   o f   t h e   c o n t r o l .  {:/} |  N U M E R I C  |  |  |  | 
|  i n d e n t  |  . 1 1  |  I n d e n t  | {::nomarkdown}  T h e   n u m b e r   o f   c h a r a c t e r s   t o   i n d e n t   t h e   c o n t r o l   i n   t h e   d i a l o g .     H a s   n o \ r a f f e c t   o n   t h e   s p a c i n g   o f   t e x t   g e n e r a t e d   f r o m   t h e   c o n t r o l .  {:/} |  N U M E R I C  |  |  |  | 
|  p a d  |  . 1 2  |  P a d  | {::nomarkdown}  T h e   n u m b e r   o f   c h a r a c t e r s   t o   i n d e n t   t h e   t e x t   g e n e r a t e d \ r f r o m   t h e   c o n t r o l .     H a s   n o   a f f e c t   o n   t h e   p o s i t i o n   o f \ r t h e   c o n t r o l   i n   t h e   d i a l o g .  {:/} |  N U M E R I C  |  |  |  | 
|  m i n _ v a l u e  |  . 1 3  |  M i n   V a l u e  | {::nomarkdown}  M i n   a l l o w e d   v a l u e   o n   n u m e r i c   f i e l d s .  {:/} |  N U M E R I C  |  |  |  | 
|  m a x _ v a l u e  |  . 1 4  |  M a x   V a l u e  | {::nomarkdown}  M a x   a l l o w e d   v a l u e   o n   n u m e r i c   f i e l d s .  {:/} |  N U M E R I C  |  |  |  | 
|  i n c r e m e n t  |  . 1 5  |  I n c r e m e n t  | {::nomarkdown}  A m o u n t   t o   i n c r e m e n t   n u m e r i c   f i e l d s   w i t h   t h e   u p \ r a n d   d o w n   a r r o w   b u t t o n s   a r e   u s e d .  {:/} |  N U M E R I C  |  |  |  | 
|  d a t e _ t y p e  |  . 1 6  |  D a t e   T y p e  | {::nomarkdown}  I n d i c a t e s   t h e   t y p e   o f   c o n t r o l   t o   u s e   t o   r e p r e s e n t   a   d a t e   v a l u e .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>R</dt><dd>DATE & REQUIRED TIME</dd><dt>Y</dt><dd>COMBO YEAR ONLY</dd><dt>T</dt><dd>DATE & TIME</dd><dt>C</dt><dd>COMBO STYLE</dd><dt>D</dt><dd>DATE</dd><dt>M</dt><dd>COMBO YEAR & MONTH</dd></dl>{:/} | 
|  d e s c r i p t i o n  |  2  |  D e s c r i p t i o n  | {::nomarkdown}  A   w o r d   p r o c e s s i n g   f i e l d   c o n t a i n i n g   a   d e s c r i p t i o n   o f   t h e   f i e l d ,   o r   o t h e r   \ r n o t e s   a n d   h i s t o r y   i n f o r m a t i o n .  {:/} |  S T R I N G  |  |  |  | 
|  u r l  |  3  |  U r l  | {::nomarkdown}  W e b   a d d r e s s   o f   h y p e r l i n k   f i e l d s .  {:/} |  S T R I N G  |  |  |  | 
|  i t e m s  |  1 0  |  I t e m s  | {::nomarkdown}  W o r d   p r o c e s s i n g   f i e l d   r e p r e s e n t i n g   e i t h e r   t h e   l i s t   o f   i t e m s   t h a t   c a n \ r b e   s e l e c t e d ,   o r   t h e   d e f a u l t   w o r d   p r o c e s s i n g   t e x t .  {:/} |  S T R I N G  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}