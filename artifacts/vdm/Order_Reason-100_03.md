---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Reason-100_03 

<dl>
<dt>id</dt><dd> O r d e r _ R e a s o n - 1 0 0 _ 0 3 </dd>
<dt>fmId</dt><dd> 1 0 0 . 0 3 </dd>
<dt>label</dt><dd> O r d e r   R e a s o n </dd>
<dt>location</dt><dd> ^ O R D ( 1 0 0 . 0 3 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   i s   u s e d   t o   d e f i n e   t h e   p o s s i b l e   r e a s o n s   f o r   D C ' i n g / c a n c e l l i n g \ r a n   o r d e r .     T h e   e n t r i e s   a r e   i d e n t i f i e d   b y   p a c k a g e   s o   t h a t   e a c h   p a c k a g e \ r c a n   h a v e   t h e i r   o w n   s e t   o f   r e a s o n s .     S i t e s   m a y   w i s h   t o   m o d i f y   t h e \ r e n t r i e s   i n   t h i s   f i l e   t o   f i t   t h e i r   n e e d s .     I t   i s   i m p o r t a n t   t o   m a i n t a i n \ r t h e   c o r r e c t   l i n k s   t o   t h e   R a d i o l o g y   R e a s o n   f i l e   i f   m o d i f i c a t i o n s   a r e \ r m a d e .     T h e s e   l i n k s   a r e   m a i n t a i n e d   i n   t h e   C O D E   f i e l d .     F o r   R a d i o l o g y \ r r e a s o n s ,   t h e   c o d e   f i e l d   i s   t h e   i n t e r n a l   #   o f   t h e   r a d i o l o g y   r e a s o n   f i l e \ r f o l l o w e d   b y   t h e   c h a r a c t e r s   R A . \ r   \ r T h i s   f i l e   p o i n t s   t h e   t h e   N a t u r e   o f   O r d e r   f i l e .     T h i s   r e l a t i o n s h i p \ r i s   w h a t   i d e n t i f i e s   t h e   a p p r o p r i a t e   a c t i o n s   t o   t a k e   f o r   a n y   D C   R e a s o n .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   D C   R e a s o n .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  s y n o n y m  |  . 0 3  |  S y n o n y m  | {::nomarkdown}  T h i s   i s   t h e   s y n o n y m   f o r   t h i s   r e a s o n   a n d   i s   u s e d   o n   a   f i l e   l o o k u p .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  i n a c t i v e  |  . 0 4  |  I n a c t i v e  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   i n a c t i v a t e   a   D C   R e a s o n .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>ACTIVE</dd><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
|  p a c k a g e  |  . 0 5  |  P a c k a g e  | {::nomarkdown}  T h i s   i s   t h e   p a c k a g e   t h a t   t h i s   r e a s o n   a p p l i e s   t o .  {:/} |  P O I N T E R  |  |  | Package-9_4 | 
|  c o d e  |  . 0 6  |  C o d e  | {::nomarkdown}  T h i s   i s   a   c o d e   t h a t   i s   u s e d   t o   i d e n t i f y   t h i s   D C   R e a s o n . \ r T h i s   f i e l d   i s   n o t   m a n d i t o r y .     I f   a   c o d e   i s   n o t   d e f i n e d ,   t h e n   t h e   i n t e r n a l \ r n u m b e r   o f   t h e   f i l e   e n t r y   i s   u s e d   t o   i d e n t i f y   t h i s   r e a s o n .     R a d i o l o g y \ r u s e s   t h i s   f i e l d   f o r   i t ' s   r e a s o n s   t o   i d e n t i f y   t h e   e n t r y   w i t h   i t ' s \ r c o r r e s p o n d i n g   e n t r y   i n   t h e   R a d i o l o g y   R e a s o n s   f i l e .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  n a t u r e _ o f _ a c t i v i t y  |  . 0 7  |  N a t u r e   O f   A c t i v i t y  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   c a t e g o r i z e   D C   r e a s o n s   i n t o   t y p e s   t h a t   O E / R R \ r c a n   t a k e   a c t i o n   o n .     T h e   a c t i o n s   a n d   t y p e s   a r e   d e f i n e d   i n   t h e \ r N a t u r e   o f   o r d e r   f i l e .  {:/} |  P O I N T E R  |  | REQUIRED | Nature_Of_Order-100_02 | 
|  m e s s a g e _ s t a t u s  |  . 0 8  |  M e s s a g e   S t a t u s  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   i d e n t i f y   t h e   s t a t u s   a n   o r d e r   w i l l   b e   s e t   t o \ r w h e n   t h i s   o r d e r   r e a s o n   i s   s e l e c t e d .     T h i s   i s   c u r r e n t l y   u s e d   b y \ r b a c k d o o r   l a b   o p t i o n s   w h e n   o r d e r s / a c c e s s i o n s   a r e   c a n c e l e d .     I f   t h e   f i e l d \ r i s   b l a n k ,   l a b   s e n d s   t h e   H L 7   s t a t u s   u p d a t e   m e s s a g e   w i t h   a   s t a t u s   o f   D C \ r ( t h e   d e f a u l t ) ;   o t h e r w i s e   i t   w i l l   u s e   t h e   s t a t u s   i n   t h i s   f i e l d .  {:/} |  P O I N T E R  |  |  | Order_Status-100_01 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}