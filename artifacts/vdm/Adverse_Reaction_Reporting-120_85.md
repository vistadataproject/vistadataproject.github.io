---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Adverse_Reaction_Reporting-120_85 

<dl>
<dt>id</dt><dd> A d v e r s e _ R e a c t i o n _ R e p o r t i n g - 1 2 0 _ 8 5 </dd>
<dt>fmId</dt><dd> 1 2 0 . 8 5 </dd>
<dt>label</dt><dd> A d v e r s e   R e a c t i o n   R e p o r t i n g </dd>
<dt>location</dt><dd> ^ G M R ( 1 2 0 . 8 5 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   a l l   t h e   d a t a   f o r   a n   O b s e r v e d   D r u g   r e a c t i o n .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d a t e _ t i m e _ o f _ e v e n t  |  . 0 1  |  D a t e / t i m e   O f   E v e n t  | {::nomarkdown}  T h e   d a t e / t i m e   t h a t   t h i s   o b s e r v e d   r e a c t i o n   o c c u r r e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  p a t i e n t  |  . 0 2  |  P a t i e n t  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   p a t i e n t   t o   w h o m   t h i s   o b s e r v e d   r e a c t i o n   o c c u r r e d . \ r T h i s   f i e l d   i s   a   p o i n t e r   t o   t h e   P a t i e n t   f i l e .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
|  r e l a t e d _ r e a c t i o n  |  . 0 3  |  R e l a t e d   R e a c t i o n  | {::nomarkdown}  T h i s   i s   t h e   r e l a t e d   r e a c t i o n   i n   t h e   P a t i e n t   A l l e r g i e s   ( 1 2 0 . 8 )   f i l e   f o r \ r t h i s   e v e n t .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Patient_Allergies-120_8](Patient_Allergies-120_8.md) | 
|  o b s e r v e r  |  . 5  |  O b s e r v e r  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   p e r s o n   w h o   w i t n e s s e d   t h i s   r e a c t i o n .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  d a t e _ r e p o r t e d  |  1 . 1  |  D a t e   R e p o r t e d  | {::nomarkdown}  T h i s   f i e l d   i s   t o   t r a c k   w h e n   a   r e p o r t   i s   e n t e r e d   i n t o   t h i s   f i l e .  {:/} |  D A T E - T I M E  |  | INDEXED |  | 
|  r e p o r t i n g _ u s e r  |  1 . 2  |  R e p o r t i n g   U s e r  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   t r a c k   t h e   u s e r   w h o   e n t e r e d   t h e   r e a c t i o n .     I t   i s   a \ r p o i n t e r   t o   F i l e   2 0 0 .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  r e a c t i o n s  |  2  |  R e a c t i o n s  | {::nomarkdown}  A   l i s t   o f   s i g n s / s y m p t o m s   o b s e r v e d   f o r   t h i s   r e a c t i o n .  {:/} |  [ O B J E C T ]  |  |  | [Reactions-120_8502](#Reactions-120_8502)  | 
|  s u s p e c t e d _ a g e n t  |  3  |  S u s p e c t e d   A g e n t  | {::nomarkdown}  A   l i s t   o f   s u s p e c t e d   a g e n t s   f o r   t h i s   o b s e r v e d   r e a c t i o n .  {:/} |  [ O B J E C T ]  |  |  | [Suspected_Agent-120_8503](#Suspected_Agent-120_8503)  | 
|  r e l e v a n t _ t e s t _ l a b _ d a t a  |  4  |  R e l e v a n t   T e s t / l a b   D a t a  | {::nomarkdown}  A   l i s t   o f   a l l   t h e   r e l e v a n t   t e s t / l a b   d a t a   f o r   t h i s   o b s e r v e d   r e a c t i o n .  {:/} |  [ O B J E C T ]  |  |  | [Relevant_Test_lab_Data-120_8504](#Relevant_Test_lab_Data-120_8504)  | 
|  q u e s t i o n _ n u m b e r 1  |  5  |  Q u e s t i o n   # 1  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h e t h e r   o r   n o t   a   p a t i e n t   h a s   d i e d   f r o m   t h i s   r e a c t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  q u e s t i o n _ n u m b e r 2  |  6  |  Q u e s t i o n   # 2  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h e t h e r   o r   n o t   a   p a t i e n t   w a s   t r e a t e d   w i t h   a   R X   d r u g \ r f o r   t h i s   r e a c t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  q u e s t i o n _ n u m b e r 3  |  7  |  Q u e s t i o n   # 3  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h e t h e r   o r   n o t   t h e   r e a c t i o n   c a u s e d   a   l i f e   t h r e a t e n i n g \ r i l l n e s s .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  q u e s t i o n _ n u m b e r 4  |  8  |  Q u e s t i o n   # 4  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h e t h e r   o r   n o t   t h e   p a t i e n t   h a d   t o   v i s i t   a   d o c t o r   o r \ r a n   E R   b e c a u s e   o f   t h i s   r e a c t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  q u e s t i o n _ n u m b e r 5  |  9  |  Q u e s t i o n   # 5  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h e t h e r   t h i s   r e a c t i o n   r e q u i r e d   h o s p i t a l i z a t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  n o _ d a y _ h o s p i t a l i z e d  |  9 . 1  |  N o .   D a y   H o s p i t a l i z e d  | {::nomarkdown}  T h i s   f i e l d   s h o w s   t h e   n u m b e r   o f   d a y s   t h e   p a t i e n t   w a s   h o s p i t a l i z e d   b e c a u s e \ r o f   t h e   r e a c t i o n .  {:/} |  N U M E R I C  |  |  |  | 
|  q u e s t i o n _ n u m b e r 6  |  1 0  |  Q u e s t i o n   # 6  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   i f   t h e   p a t i e n t   h a d   a   p r o l o n g e d   h o s p i t a l i z a t i o n \ r b e c a u s e   o f   t h e   r e a c t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  q u e s t i o n _ n u m b e r 7  |  1 1  |  Q u e s t i o n   # 7  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h e t h e r   o r   n o t   t h e   p a t i e n t   h a d   s o m e   s o r t   o f \ r p e r m a n e n t   d i s a b i l i t y   a s   a   r e s u l t   o f   t h i s   r e a c t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  q u e s t i o n _ n u m b e r 8  |  1 2  |  Q u e s t i o n   # 8  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h e t h e r   t h e   p a t i e n t   r e c o v e r e d   f r o m   a n y   i l l n e s s   t h a t \ r m a y   h a v e   r e s u l t e d   f r o m   t h e   r e a c t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  q u e s t i o n _ n u m b e r 9  |  1 2 . 1  |  Q u e s t i o n   # 9  | {::nomarkdown}  T h i s   f i e l d   i s   t o   f i n d   o u t   i f   t h e   o b s e r v e d   r e a c t i o n   w a s   a   C o n g e n i t a l   A n o m a l y .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  q u e s t i o n _ n u m b e r 1 0  |  1 2 . 2  |  Q u e s t i o n   # 1 0  | {::nomarkdown}  T h i s   f i e l d   i s   t o   f i n d   o u t   i f   t h i s   e v e n t   r e q u i r e d   a n y   i n t e r v e n t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  c o n c o m i t a n t _ d r u g s  |  1 3  |  C o n c o m i t a n t   D r u g s  | {::nomarkdown}  A   l i s t   o f   a l l   d r u g s   t h a t   m a y   h a v e   b e e n   t a k e n   a t   t h e   t i m e   o f   t h e   r e a c t i o n .  {:/} |  [ O B J E C T ]  |  |  | [Concomitant_Drugs-120_8513](#Concomitant_Drugs-120_8513)  | 
|  o t h e r _ r e l a t e d _ h i s t o r y  |  1 4  |  O t h e r   R e l a t e d   H i s t o r y  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a n y   o t h e r   r e l a t e d   e v e n t   h i s t o r y   f o r   t h i s   r e a c t i o n .  {:/} |  S T R I N G  |  |  |  | 
|  s e v e r i t y  |  1 4 . 5  |  S e v e r i t y  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   t h e   s e v e r i t y   o f   t h i s   r e a c t i o n .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>MILD</dd><dt>2</dt><dd>MODERATE</dd><dt>3</dt><dd>SEVERE</dd></dl>{:/} | 
|  d a t e _ m d _ n o t i f i e d  |  2 2  |  D a t e   M d   N o t i f i e d  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a t e   t h e   d o c t o r   w a s   n o t i f i e d   o f   t h i s   r e a c t i o n .  {:/} |  D A T E - T I M E  |  |  |  | 
|  f d a _ q u e s t i o n _ n u m b e r 1  |  2 3  |  F d a   Q u e s t i o n   # 1  | {::nomarkdown}  T h i s   f i e l d   d e t e r m i n e s   i f   t h e   r e a c t i o n   i s   c o n s i d e r e d   s e r i o u s .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  f d a _ q u e s t i o n _ n u m b e r 2  |  2 4  |  F d a   Q u e s t i o n   # 2  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   w h e t h e r   t h i s   r e a c t i o n   i s   r e l a t e d   t o   a   n e w   d r u g .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  f d a _ q u e s t i o n _ n u m b e r 3  |  2 5  |  F d a   Q u e s t i o n   # 3  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   w h e t h e r   t h i s   r e a c t i o n   w a s   a n   u n e x p e c t e d   r e a c t i o n \ r f o r   t h i s   d r u g .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  f d a _ q u e s t i o n _ n u m b e r 4  |  2 6  |  F d a   Q u e s t i o n   # 4  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   w h e t h e r   t h i s   r e a c t i o n   i s   r e l a t e d   t o   a \ r t h e r a p e u t i c   f a i l u r e   o f   t h e   d r u g .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  f d a _ q u e s t i o n _ n u m b e r 5  |  2 6 . 1  |  F d a   Q u e s t i o n   # 5  | {::nomarkdown}  T h i s   f i e l d   i s   t o   t r a c k   i f   t h e   r e a c t i o n   w a s   a   d o s e   r e l a t e d   r e a c t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  d a t e _ r e p o r t e d _ t o _ f d a  |  2 7  |  D a t e   R e p o r t e d   T o   F d a  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a t e   o n   w h i c h   t h e   F D A   w a s   s e n t   t h e   A D R   r e p o r t .  {:/} |  D A T E - T I M E  |  |  |  | 
|  d a t e _ o f _ p a t i e n t _ c o n s e n t _ t o _ m f r  |  2 8  |  D a t e   O f   P a t i e n t   C o n s e n t   T o   M f r  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   d a t e   t h e   p a t i e n t   h a d   g i v e n   h i s   c o n s e n t   t o   h a v e   t h e \ r r e a c t i o n   r e p o r t e d   t o   t h e   m a n u f a c t u r e r .  {:/} |  D A T E - T I M E  |  |  |  | 
|  d a t e _ s e n t _ t o _ m f r  |  2 9  |  D a t e   S e n t   T o   M f r  | {::nomarkdown}    T h i s   i s   t h e   d a t e   w h e n   t h e   r e p o r t   w a s   s e n t   t o   t h e   m a n u f a c t u r e r .  {:/} |  D A T E - T I M E  |  |  |  | 
|  d a t e _ s e n t _ t o _ r c p m  |  3 0  |  * d a t e   S e n t   T o   R c p m  | {::nomarkdown}  T h i s   i s   t h e   d a t e   w h e n   t h e   r e p o r t   w a s   s e n t   t o   t h e   r e g i o n a l   o f f i c e s .  {:/} |  D A T E - T I M E  |  |  |  | 
|  d a t e _ s e n t _ t o _ v a e r s  |  3 1  |  D a t e   S e n t   T o   V a e r s  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   d a t e   w h e n   t h e   r e p o r t   w a s   s e n t   t o   t h e   V A E R S .  {:/} |  D A T E - T I M E  |  |  |  | 
|  p t _ a c t i o n _ f d a _ r e p o r t  |  3 1 . 1  |  P & t   A c t i o n   F d a   R e p o r t  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   i f   t h e   P & T   c o m m i t t e e   d e t e r m i n e d   w h e t h e r   t o   s e n d \ r t h e   r e p o r t   t o   F D A .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  p t _ a c t i o n _ m f r _ r e p o r t  |  3 1 . 2  |  P & t   A c t i o n   M f r   R e p o r t  | {::nomarkdown}  T h i s   f i e l d   t e l l s   i f   t h e   P & T   c o m m i t t e e   d e t e r m i n e d   w h e t h e r   t o   s e n d   t h e   r e p o r t   t o \ r t h e   m a n u f a c t u r e r .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  p t _ a c t i o n _ r c p m _ r e p o r t  |  3 1 . 3  |  * p & t   A c t i o n   R c p m   R e p o r t  | {::nomarkdown}  T h i s   f i e l d   d e t e r m i n e s   w h e t h e r   o r   n o t   t h e   P & T   c o m m i t t e e   w i l l   s e n d   t h e \ r r e p o r t   t o   t h e   r e g i o n a l   o f f i c e s .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl></dl>{:/} | 
|  p t _ a d d e n d u m  |  3 1 . 5  |  P & t   A d d e n d u m  | {::nomarkdown}  L i s t   o f   c o m m e n t s   m a d e   b y   t h e   P & T   c o m m i t t e e .  {:/} |  [ O B J E C T ]  |  |  | [Pt_Addendum-120_85315](#Pt_Addendum-120_85315)  | 
|  r e p o r t e r _ n a m e  |  4 3  |  R e p o r t e r   N a m e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   n a m e   o f   t h e   p e r s o n   f i l l i n g   o u t   t h e   r e p o r t s .  {:/} |  S T R I N G  |  |  |  | 
|  r e p o r t e r _ a d d r e s s 1  |  4 4  |  R e p o r t e r   A d d r e s s 1  | {::nomarkdown}  L i n e   o n e   o f   t h e   a d d r e s s   o f   t h e   p e r s o n   f i l l i n g   o u t   t h e   r e p o r t .  {:/} |  S T R I N G  |  |  |  | 
|  r e p o r t e r _ a d d r e s s 2  |  4 5  |  R e p o r t e r   A d d r e s s 2  | {::nomarkdown}  L i n e   t w o   o f   t h e   a d d r e s s   o f   t h e   p e r s o n   f i l l i n g   o u t   t h e   r e p o r t .  {:/} |  S T R I N G  |  |  |  | 
|  r e p o r t e r _ a d d r e s s 3  |  4 6  |  R e p o r t e r   A d d r e s s 3  | {::nomarkdown}  L i n e   t h r e e   o f   t h e   a d d r e s s   o f   t h e   p e r s o n   f i l l i n g   o u t   t h e   r e p o r t .  {:/} |  S T R I N G  |  |  |  | 
|  r e p o r t e r _ c i t y  |  4 7  |  R e p o r t e r   C i t y  | {::nomarkdown}  T h e   c i t y   w h e r e   t h e   p e r s o n   l i v e s   w h o   i s   f i l l i n g   o u t   t h e   r e p o r t .  {:/} |  S T R I N G  |  |  |  | 
|  r e p o r t e r _ s t a t e  |  4 8  |  R e p o r t e r   S t a t e  | {::nomarkdown}  T h e   s t a t e   w h e r e   t h e   r e p o r t e r   r e s i d e s .  {:/} |  P O I N T E R  |  |  | State-5 | 
|  r e p o r t e r _ z i p  |  4 9  |  R e p o r t e r   Z I P  | {::nomarkdown}  T h i s   i s   t h e   z i p   c o d e   o f   t h e   p e r s o n   f i l l i n g   o u t   t h e   r e p o r t .  {:/} |  S T R I N G  |  |  |  | 
|  r e p o r t e r _ p h o n e  |  5 0  |  R e p o r t e r   P h o n e  | {::nomarkdown}  T h i s   i s   t h e   p h o n e   n u m b e r   o f   t h e   p e r s o n   w h o   i s   f i l l i n g   o u t   t h e   r e p o r t .  {:/} |  S T R I N G  |  |  |  | 
|  r p t _ q u e s t i o n _ n u m b e r 1  |  5 1  |  R p t   Q u e s t i o n   # 1  | {::nomarkdown}  T h i s   f i e l d   d e t e r m i n e s   i f   t h e   r e p o r t e r   i s   a   h e a l t h   c a r e   p r o v i d e r .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  r p t _ q u e s t i o n _ n u m b e r 2  |  5 2  |  R p t   Q u e s t i o n   # 2  | {::nomarkdown}  T h i s   f i e l d   d e t e r m i n e s   i f   t h e   r e p o r t e r   w a n t s   t o   p e r m i t   t h e   F D A   t o   i n f o r m   t h e   m a n u f a c t u r e r   o f   h i s   i d e n t i t y .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  o c c u p a t i o n  |  5 2 . 1  |  O c c u p a t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   r e p o r t e r ' s   c u r r e n t   o c c u p a t i o n .  {:/} |  S T R I N G  |  |  |  | 
|  m a n u f a c t u r e r _ n a m e  |  5 3  |  M a n u f a c t u r e r   N a m e  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   n a m e   o f   t h e   m a n u f a c t u r e r   o f   t h e   r e a c t a n t .  {:/} |  S T R I N G  |  |  |  | 
|  m f r _ a d d r e s s _ n u m b e r 1  |  5 4  |  M f r   A d d r e s s   # 1  | {::nomarkdown}  T h i s   i s   a d d r e s s   l i n e   o n e   f o r   t h e   m a n u f a c t u r e r .  {:/} |  S T R I N G  |  |  |  | 
|  m f r _ a d d r e s s _ n u m b e r 2  |  5 5  |  M f r   A d d r e s s   # 2  | {::nomarkdown}  T h i s   i s   a d d r e s s   l i n e   t w o   f o r   t h e   m a n u f a c t u r e r .  {:/} |  S T R I N G  |  |  |  | 
|  m f r _ a d d r e s s _ n u m b e r 3  |  5 6  |  M f r   A d d r e s s   # 3  | {::nomarkdown}  T h i s   i s   a d d r e s s   l i n e   t h r e e   f o r   t h e   m a n u f a c t u r e r .  {:/} |  S T R I N G  |  |  |  | 
|  m f r _ c i t y  |  5 7  |  M f r   C i t y  | {::nomarkdown}  T h i s   i s   t h e   c i t y   o f   t h e   m a n u f a c t u r e r .  {:/} |  S T R I N G  |  |  |  | 
|  m f r _ s t a t e  |  5 8  |  M f r   S t a t e  | {::nomarkdown}  T h i s   i s   t h e   s t a t e   w h e r e   t h e   m a n u f a c t u r e r   i s   l o c a t e d .  {:/} |  P O I N T E R  |  |  | State-5 | 
|  m f r _ z i p  |  5 9  |  M f r   Z I P  | {::nomarkdown}  T h i s   i s   t h e   Z i p   C o d e   o f   t h e   m a n u f a c t u r e r .  {:/} |  S T R I N G  |  |  |  | 
|  i n d _ n d a _ n u m b e r _ f o r _ s u p p o r t _ d r u g  |  6 0  |  I n d / n d a   #   F o r   S u p p o r t   D r u g  | {::nomarkdown}  T h i s   i s   t h e   I N D / N D A   #   f o r   s u p p o r t   d r u g   f o r   t h e   m a n u f a c t u r e r .  {:/} |  S T R I N G  |  |  |  | 
|  m f r _ c o n t r o l _ n u m b e r  |  6 1  |  M f r   C o n t r o l   #  | {::nomarkdown}  T h i s   i s   t h e   c o n t r o l   n u m b e r   u s e d   b y   t h e   m a n u f a c t u r e r .  {:/} |  S T R I N G  |  |  |  | 
|  d a t e _ r e c e i v e d _ b y _ m f r  |  6 2  |  D a t e   R e c e i v e d   B y   M f r  | {::nomarkdown}  T h i s   i s   t h e   d a t e   t h e   r e p o r t   w a s   r e c e i v e d   b y   t h e   m a n u f a c t u r e r .  {:/} |  D A T E - T I M E  |  |  |  | 
|  r e p o r t _ s o u r c e  |  6 3  |  R e p o r t   S o u r c e  | {::nomarkdown}  T h i s   i s   t h e   s o u r c e   o f   t h e   r e p o r t .  {:/} |  [ E N U M E R A T I O N ]  |  |  | {::nomarkdown}<dl><dt>c</dt><dd>CONSUMER</dd><dt>s</dt><dd>STUDY</dd><dt>l</dt><dd>LITERATURE</dd><dt>h</dt><dd>HEALTH PROFESSIONAL</dd><dt>f</dt><dd>FOREIGN</dd></dl>{:/} | 
|  _ 1 5 _ d a y _ r e p o r t  |  6 4  |  1 5   D a y   R e p o r t  | {::nomarkdown}  T h i s   f i e l d   i s   t o   d e t e r m i n e   i f   t h e   1 5   D a y   R e p o r t   h a s   b e e n   c o m p l e t e d .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  r e p o r t _ t y p e  |  6 5  |  R e p o r t   T y p e  | {::nomarkdown}  T h i s   i s   t h e   t y p e   o f   r e p o r t   i s s u e d .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>f</dt><dd>FOLLOWUP</dd><dt>i</dt><dd>INITIAL</dd></dl>{:/} | 

## <a name="Reactions-120_8502"></a>Reactions-120_8502 

<dl>
<dt>id</dt><dd> R e a c t i o n s - 1 2 0 _ 8 5 0 2 </dd>
<dt>label</dt><dd> R e a c t i o n s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  r e a c t i o n s  |  . 0 1  |  R e a c t i o n s  | {::nomarkdown}  O n e   s i g n / s y m p t o m   o b s e r v e d   f o r   t h i s   r e a c t i o n .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Sign_symptoms-120_83 | 
|  o t h e r _ r e a c t i o n  |  1  |  O t h e r   R e a c t i o n  | {::nomarkdown}  I f   t h i s   s i g n / s y m p t o m   c a n n o t   b e   f o u n d   i n   t h e   S i g n / S y m p t o m s   ( 1 2 0 . 8 3 )   f i l e , \ r t h e n   t h e   f r e e   t e x t   o f   w h a t   t h e   u s e r   t y p e d   i n   w i l l   b e   h e r e ,   a n d   t h e \ r s i g n s / s y m p t o m s   o f   O T H E R   R E A C T I O N   w i l l   b e   t h e   v a l u e   o f   t h e   R E A C T I O N S   f i e l d .  {:/} |  S T R I N G  |  |  |  | 
|  e n t e r e d _ b y  |  2  |  E n t e r e d   B y  | {::nomarkdown}  T h e   p e r s o n   w h o   e n t e r e d   t h i s   r e a c t i o n   i n t o   t h e   s y s t e m .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 

## <a name="Suspected_Agent-120_8503"></a>Suspected_Agent-120_8503 

<dl>
<dt>id</dt><dd> S u s p e c t e d _ A g e n t - 1 2 0 _ 8 5 0 3 </dd>
<dt>label</dt><dd> S u s p e c t e d   A g e n t </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s u s p e c t e d _ a g e n t  |  . 0 1  |  S u s p e c t e d   A g e n t  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   o n e   o f   t h e   s u s p e c t e d   a g e n t s   f o r   t h i s   o b s e r v e d   r e a c t i o n .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  d a i l y _ d o s e  |  1  |  D a i l y   D o s e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a i l y   d o s a g e   f o r   t h i s   s u s p e c t e d   a g e n t .  {:/} |  S T R I N G  |  |  |  | 
|  s i g  |  1 . 5  |  S i g  | {::nomarkdown}  T h i s   f i l e   c o n t a i n s   t h e   S I G   c o d e   t h a t   i n d i c a t e s   h o w   t h i s   d r u g   i s   t o   b e   g i v e n .  {:/} |  S T R I N G  |  |  |  | 
|  r o u t e _ o f _ a d m i n i s t r a t i o n  |  2  |  R o u t e   O f   A d m i n i s t r a t i o n  | {::nomarkdown}  T h i s   i s   t h e   r o u t e   o f   a d m i n i s t r a t i o n   f o r   t h i s   s u s p e c t e d   a g e n t .  {:/} |  S T R I N G  |  |  |  | 
|  i n d i c a t i o n s _ f o r _ u s e  |  3  |  I n d i c a t i o n s   F o r   U s e  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   t h e   r e a s o n i n g   f o r   a   p a r t i c u l a r   a g e n t .  {:/} |  S T R I N G  |  |  |  | 
|  s t a r t _ d a t e _ o f _ a d m i n i s t r a t i o n  |  4  |  S t a r t   D a t e   O f   A d m i n i s t r a t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a t e   a   p a t i e n t   w a s   f i r s t   g i v e n   t h e   s u s p e c t e d   a g e n t .  {:/} |  D A T E - T I M E  |  |  |  | 
|  s t o p _ d a t e _ o f _ a d m i n i s t r a t i o n  |  5  |  S t o p   D a t e   O f   A d m i n i s t r a t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   s t o p   d a t e   f o r   a   s u s p e c t e d   a g e n t .  {:/} |  D A T E - T I M E  |  |  |  | 
|  m a n u f a c t u r e r  |  7  |  M a n u f a c t u r e r  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   n a m e   o f   t h e   m a n u f a c t u r e r   o f   t h e   s u s p e c t e d   a g e n t .  {:/} |  S T R I N G  |  |  |  | 
|  l o t _ n u m b e r  |  8  |  L o t   #  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   l o t   #   f o r   a   s u s p e c t e d   a g e n t .  {:/} |  S T R I N G  |  |  |  | 
|  n u m b e r _ o f _ p r e v i o u s _ d o s e s  |  9  |  N u m b e r   O f   P r e v i o u s   D o s e s  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   t o t a l   n u m b e r   o f   d o s e s   o f   t h i s   s u s p e c t e d   a g e n t   t h a t \ r w e r e   g i v e n   t o   t h e   p a t i e n t   p r i o r   t o   t h e   r e a c t i o n .  {:/} |  N U M E R I C  |  |  |  | 
|  l a s t _ f i l l _ d t  |  1 0  |  L a s t   F i l l   D t  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   d a t e   t h a t   t h i s   a g e n t   w a s   l a s t   f i l l e d .  {:/} |  D A T E - T I M E  |  |  |  | 
|  e x p i r a t i o n _ d a t e  |  1 0 . 1  |  E x p i r a t i o n   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   t h a t   t h e   s u s p e c t e d   a g e n t   i s   t o   e x p i r e .  {:/} |  D A T E - T I M E  |  |  |  | 
|  n d c _ n u m b e r  |  1 0 . 2  |  N d c   #  | {::nomarkdown}  T h i s   i s   t h e   N D C   ( N a t i o n a l   D r u g   C o d e )   o f   t h i s   a g e n t .  {:/} |  S T R I N G  |  |  |  | 
|  l i k e _ q u e s t i o n _ n u m b e r 1  |  1 1  |  L i k e   Q u e s t i o n   # 1  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   w h e t h e r   t h i s   r e a c t i o n   n o r m a l l y   o c c u r s   w i t h   t h i s   r e a c t a n t . \ r r e a c t a n t .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  l i k e _ q u e s t i o n _ n u m b e r 2  |  1 2  |  L i k e   Q u e s t i o n   # 2  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   w h e t h e r   a d m i n i s t r a t i o n   o f   t h e   r e a c t a n t   w a s   s t o p p e d .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  l i k e _ q u e s t i o n _ n u m b e r 3  |  1 3  |  L i k e   Q u e s t i o n   # 3  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   i f   t h e   r e a c t i o n   s t o p p e d   w h e n   t h e   a d m i n i s t r a t i o n   o f   t h e   r e a c t a n t   w a s   t e r m i n a t e d . \ r t h e   r e a c t a n t   w a s   t e r m i n a t e d .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  l i k e _ q u e s t i o n _ n u m b e r 4  |  1 4  |  L i k e   Q u e s t i o n   # 4  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   w h e t h e r   t h e   r e a c t a n t   w a s   r e a d m i n i s t e r e d .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  l i k e _ q u e s t i o n _ n u m b e r 5  |  1 5  |  L i k e   Q u e s t i o n   # 5  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   w h e t h e r   t h e   r e a c t i o n   c o u l d   b e   d u e   t o   t h e   p a t i e n t   c u r r e n t   c l i n i c a l   c o n d i t i o n .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  l i k e _ q u e s t i o n _ n u m b e r 6  |  1 6  |  L i k e   Q u e s t i o n   # 6  | {::nomarkdown}  T h i s   q u e s t i o n   d e t e r m i n e s   i f   t h e   r e a c t i o n   r e a p p e a r e d   a f t e r   t h e   r e a c t a n t   w a s   r e a d m i n i s t e r e d . \ r w a s   r e a d m i n i s t e r e d .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  l i k e l i h o o d  |  1 7  |  L i k e l i h o o d  | {::nomarkdown}  I f   t h i s   i s   a n   o b s e r v e d   d r u g   a l l e r g y / a d v e r s e   r e a c t i o n ,   t h e n   t h i s   i s   t h e \ r l i k e l i h o o d   t h a t   t h i s   i s   a n   a d v e r s e   r e a c t i o n .     T h e   d a t a   f o r   t h i s   f i e l d   i s \ r b a s e d   o n   a n   a l g o r i t h m   u s e d   b y   t h e   F D A .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>REMOTE</dd><dt>2</dt><dd>POSSIBLE</dd><dt>4</dt><dd>HIGHLY PROBABLE</dd><dt>3</dt><dd>PROBABLE</dd></dl>{:/} | 

## <a name="Relevant_Test_lab_Data-120_8504"></a>Relevant_Test_lab_Data-120_8504 

<dl>
<dt>id</dt><dd> R e l e v a n t _ T e s t _ l a b _ D a t a - 1 2 0 _ 8 5 0 4 </dd>
<dt>label</dt><dd> R e l e v a n t   T e s t / l a b   D a t a </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  t e s t  |  . 0 1  |  T e s t  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   p a r t i c u l a r   t e s t / l a b   d a t a   f o r   t h i s   o b s e r v e d   r e a c t i o n .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  r e s u l t s  |  1  |  R e s u l t s  | {::nomarkdown}  T h i s   f i e l d   w i l l   c o n t a i n   t h e   r e s u l t s   f o r   t h e   p a r t i c u l a r   t e s t .  {:/} |  S T R I N G  |  |  |  | 
|  c o l l e c t i o n _ d _ t  |  2  |  C o l l e c t i o n   D / t  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   d a t e   t h e   s a m p l e   w a s   c o l l e c t e d   f r o m   t h e   p a t i e n t .  {:/} |  D A T E - T I M E  |  |  |  | 

## <a name="Concomitant_Drugs-120_8513"></a>Concomitant_Drugs-120_8513 

<dl>
<dt>id</dt><dd> C o n c o m i t a n t _ D r u g s - 1 2 0 _ 8 5 1 3 </dd>
<dt>label</dt><dd> C o n c o m i t a n t   D r u g s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  c o n c o m i t a n t _ d r u g s  |  . 0 1  |  C o n c o m i t a n t   D r u g s  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d r u g ( s )   t h i s   p a t i e n t   w a s   t a k i n g   a t   t h e   t i m e \ r o f   t h e   r e a c t i o n .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  s t a r t _ d a t e _ o f _ a d m i n i s t r a t i o n  |  1  |  S t a r t   D a t e   O f   A d m i n i s t r a t i o n  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   d a t e   t h i s   d r u g   w a s   f i r s t   g i v e n   t o   t h e   p a t i e n t .  {:/} |  D A T E - T I M E  |  |  |  | 
|  s t o p _ d a t e _ o f _ a d m i n i s t r a t i o n  |  2  |  S t o p   D a t e   O f   A d m i n i s t r a t i o n  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   l a s t   d a y   t h e   p a t i e n t   w a s   g i v e n   t h i s   d r u g .  {:/} |  D A T E - T I M E  |  |  |  | 
|  l a s t _ f i l l _ d t  |  3  |  L a s t   F i l l   D t  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   l a s t   d a t e   t h a t   t h i s   d r u g   w a s   f i l l e d .  {:/} |  D A T E - T I M E  |  |  |  | 
|  s i g  |  4  |  S i g  | {::nomarkdown}  T h i s   f i l e   c o n t a i n s   t h e   S I G   c o d e   t h a t   i n d i c a t e s   h o w   t h i s   d r u g   i s   t o   b e   g i v e n .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Pt_Addendum-120_85315"></a>Pt_Addendum-120_85315 

<dl>
<dt>id</dt><dd> P t _ A d d e n d u m - 1 2 0 _ 8 5 3 1 5 </dd>
<dt>label</dt><dd> P & t   A d d e n d u m </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d a t e _ t i m e _ e n t e r e d  |  . 0 1  |  D a t e / t i m e   E n t e r e d  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   t h e   c o m m e n t   w a s   e n t e r e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  a d d e n d u m  |  1  |  A d d e n d u m  | {::nomarkdown}  T h i s   i s   t h e   a c t u a l   c o m m e n t   t h a t   i s   b e i n g   a d d e d .  {:/} |  S T R I N G  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}