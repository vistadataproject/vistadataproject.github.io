---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; VA_Drug_Class-50_605 

<dl>
<dt>id</dt><dd> V A _ D r u g _ C l a s s - 5 0 _ 6 0 5 </dd>
<dt>fmId</dt><dd> 5 0 . 6 0 5 </dd>
<dt>label</dt><dd> V A   D r u g   C l a s s </dd>
<dt>location</dt><dd> ^ P S ( 5 0 . 6 0 5 , </dd>
<dt>description</dt><dd>  P e r   V H A   D i r e c t i v e   2 0 0 5 - 0 4 4 ,   t h i s   f i l e   h a s   b e e n   \  l o c k e d   d o w n \  \ r b y   D a t a   S t a n d a r d i z a t i o n   ( D S ) .   T h e   f i l e   d e f i n i t i o n   ( i . e .   d a t a   d i c t i o n a r y ) \ r s h a l l   n o t   b e   m o d i f i e d .   A l l   a d d i t i o n s ,   c h a n g e s   a n d   d e l e t i o n s   t o   e n t r i e s   i n \ r t h e   f i l e   s h a l l   b e   d o n e   b y   E n t e r p r i s e   R e f e r e n c e   T e r m i n o l o g y   ( E R T )   u s i n g   t h e \ r M a s t e r   F i l e   S e r v e r   ( M F S ) ,   p r o v i d e d   b y   C o m m o n   S e r v i c e s   ( C S ) .   C r e a t i n g   a n d / o r \ r e d i t i n g   l o c a l l y   d e f i n e d   f i e l d s   i n   t h e   f i l e   a r e   n o t   p e r m i t t e d .   U s e   o f \ r l o c a l l y   d e f i n e d   f i e l d s   t h a t   w e r e   c r e a t e d   p r i o r   t o   V H A   D i r e c t i v e \ r 2 0 0 5 - 0 4 4   s h a l l   n o t   b e   s u p p o r t e d . \ r   \ r T h i s   f i l e   c o n t a i n s   t h e   V A   D r u g   C l a s s i f i c a t i o n s .   E a c h   f i v e - c h a r a c t e r \ r a l p h a - n u m e r i c   c o d e   s p e c i f i e s   a   b r o a d   c l a s s i f i c a t i o n   a n d   a   s p e c i f i c \ r t y p e   o f   p r o d u c t .   T h e   f i r s t   t w o   c h a r a c t e r s   a r e   l e t t e r s   a n d   f o r m   t h e \ r m n e m o n i c   f o r   t h e   m a j o r   c l a s s i f i c a t i o n   ( e . g . ,   A M   f o r   a n t i m i c r o b i a l s ) . \ r C h a r a c t e r s   3   t h r o u g h   5   a r e   n u m b e r s   a n d   f o r m   t h e   b a s i s   f o r   s u b c l a s s i f i c a t i o n . \ r T h e   V A   D r u g   C l a s s i f i c a t i o n   s y s t e m   c l a s s i f i e s   d r u g   p r o d u c t s ,   n o t \ r g e n e r i c   i n g r e d i e n t s .   D r u g   p r o d u c t s   w i t h   l o c a l   e f f e c t s   a r e   c l a s s i f i e d \ r b y   r o u t e   o f   a d m i n i s t r a t i o n   ( e . g . ,   d e r m a t o l o g i c a l ,   o p h t h a l m i c ) .   I f   a \ r p r o d u c t   i s   n o t   c l a s s i f i e d   b y   r o u t e   o f   a d m i n i s t r a t i o n ,   i t   i s   c l a s s i f i e d \ r i n   m o s t   i n s t a n c e s   u n d e r   a   s p e c i f i c   c h e m i c a l   o r   p h a r m a c o l o g i c a l \ r c l a s s i f i c a t i o n   ( e . g . ,   b e t a - b l o c k e r s ,   c e p h a l o s p o r i n s ) .   I f   a   p r o d u c t \ r i s   n o t   c l a s s i f i e d   b y   r o u t e   o f   a d m i n i s t r a t i o n ,   o r   c h e m i c a l   o r \ r p h a r m a c o l o g i c a l   s u b c l a s s i f i c a t i o n ,   i t   m a y   b e   c l a s s i f i e d   u n d e r   a \ r t h e r a p e u t i c   c a t e g o r y   ( e . g . ,   a n t i l i p e m i c   a g e n t s ,   a n t i p a r k i n s o n   a g e n t s ) .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  c o d e  |  . 0 1  |  C o d e  | {::nomarkdown}  T h i s   i s   t h e   f i v e   a l p h a n u m e r i c   c h a r a c t e r   c o d e   o f   t h e   c l a s s i f i c a t i o n .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  c l a s s i f i c a t i o n  |  1  |  C l a s s i f i c a t i o n  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   c l a s s i f i c a t i o n .  {:/} |  S T R I N G  |  |  |  | 
|  p a r e n t _ c l a s s  |  2  |  P a r e n t   C l a s s  | {::nomarkdown}  T h i s   i s   t h e   p a r e n t   c l a s s .  {:/} |  P O I N T E R  |  | INDEXED | [VA_Drug_Class-50_605](VA_Drug_Class-50_605.md) | 
|  t y p e - 3  |  3  |  T y p e  | {::nomarkdown}  T h i s   i s   t h e   t y p e   o f   t h e   c l a s s i f i c a t i o n .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>MAJOR</dd><dt>2</dt><dd>SUB-CLASS</dd><dt>1</dt><dd>MINOR</dd></dl>{:/} | 
|  d e s c r i p t i o n  |  4  |  D e s c r i p t i o n  | {::nomarkdown}  T h i s   i s   a   d e s c r i p t i o n   o f   t h e   c l a s s i f i c a t i o n .  {:/} |  S T R I N G  |  |  |  | 
|  m a s t e r _ e n t r y _ f o r _ v u i d  |  9 9 . 9 8  |  M a s t e r   E n t r y   F o r   V U I D  | {::nomarkdown}  T h i s   f i e l d   i d e n t i f i e s   t h e   M a s t e r   e n t r y   f o r   a   V U I D   a s s o c i a t e d   w i t h   a   T e r m / C o n c e p t .  {:/} |  B O O L E A N  |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  v u i d  |  9 9 . 9 9  |  V U I D  | {::nomarkdown}  V H A   U n i q u e   I D   ( V U I D ) .   A   u n i q u e   m e a n i n g l e s s   i n t e g e r   a s s i g n e d   t o   r e f e r e n c e   t e r m s   V H A   w i d e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  e f f e c t i v e _ d a t e _ t i m e  |  9 9 . 9 9 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  D e s c r i b e s   t h e   p a i r   S t a t u s   a n d   E f f e c t i v e   D a t e / T i m e   f o r   e a c h   r e f e r e n c e   t e r m .  {:/} |  [ O B J E C T ]  |  |  | [Effective_Date_time-50_60509](#Effective_Date_time-50_60509)  | 

## <a name="Effective_Date_time-50_60509"></a>Effective_Date_time-50_60509 

<dl>
<dt>id</dt><dd> E f f e c t i v e _ D a t e _ t i m e - 5 0 _ 6 0 5 0 9 </dd>
<dt>label</dt><dd> E f f e c t i v e   D a t e / t i m e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e f f e c t i v e _ d a t e _ t i m e  |  . 0 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   w h e n   t h e   S t a t u s   o f   t h e   t e r m   w a s   e s t a b l i s h e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s t a t u s  |  . 0 2  |  S t a t u s  | {::nomarkdown}  T h e   S t a t u s   o f   a   r e f e r e n c e   t e r m   i s   e i t h e r   ' A C T I V E '   o r   ' I N A C T I V E ' .   I f   t h e   t e r m   ' A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   b e   a c c e s s i b l e   b y   e n d - u s e r s   t o   d o c u m e n t   a   p a r t i c u l a r     p a t i e n t   e v e n t .   I f   ' I N A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   o n l y   b e   a c c e s s i b l e   b y   t h e   a p p l i c a t i o n \ r t o   d i s p l a y   l e g a c y   d a t a .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}