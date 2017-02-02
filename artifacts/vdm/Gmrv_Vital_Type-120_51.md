---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrv_Vital_Type-120_51 

<dl>
<dt>id</dt><dd> G m r v _ V i t a l _ T y p e - 1 2 0 _ 5 1 </dd>
<dt>fmId</dt><dd> 1 2 0 . 5 1 </dd>
<dt>label</dt><dd> G m r v   V i t a l   T y p e </dd>
<dt>location</dt><dd> ^ G M R D ( 1 2 0 . 5 1 , </dd>
<dt>description</dt><dd>  P e r   V H A   D i r e c t i v e   { p e n d i n g   d i r e c t i v e   # } ,   t h i s   f i l e   h a s   b e e n   \  l o c k e d   d o w n \    \ r b y   D a t a   S t a n d a r d i z a t i o n   ( D S ) .   T h e   f i l e   d e f i n i t i o n   ( i . e .   d a t a   d i c t i o n a r y )   \ r s h a l l   n o t   b e   m o d i f i e d .   A l l   a d d i t i o n s ,   c h a n g e s   a n d   d e l e t i o n s   t o   e n t r i e s   i n \ r t h e   f i l e   s h a l l   b e   d o n e   b y   E n t e r p r i s e   R e f e r e n c e   T e r m i n o l o g y   ( E R T )   u s i n g   t h e \ r M a s t e r   F i l e   S e r v e r   ( M F S ) ,   p r o v i d e d   b y   C o m m o n   S e r v i c e s   ( C S ) .   C r e a t i n g \ r a n d / o r   e d i t i n g   l o c a l l y   d e f i n e d   f i e l d s   i n   t h e   f i l e   a r e   n o t   p e r m i t t e d .   U s e \ r o f   l o c a l l y   d e f i n e d   f i e l d s   t h a t   w e r e   c r e a t e d   p r i o r   t o   V H A   D i r e c t i v e \ r { p e n d i n g   d i r e c t i v e   # }   s h a l l   n o t   b e   s u p p o r t e d . \ r   \ r T h i s   f i l e   c o n t a i n s   a   l i s t   o f   v i t a l   s i g n   t y p e s ,   a n d   v a r i o u s   p a r a m e t e r s \ r w h i c h   m o l d   t h e   d a t a   e n t r y .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   f i e l d   r e f l e c t s   a   l i s t   o f   v i t a l   s i g n s / p h y s i c a l   m e a s u r e m e n t   t y p e s .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  a b b r e v i a t i o n  |  1  |  A b b r e v i a t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a n   a b b r e v i a t i o n   f o r   t h i s   v i t a l   t y p e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  r a t e  |  3  |  R a t e  | {::nomarkdown}  T h i s   f i e l d   s p e c i f i e s   w h e t h e r   o r   n o t   t h e   v i t a l   m e a s u r e m e n t   r e c o r d   w i t h \ r t h i s   v i t a l   t y p e   h a s   a   r a t e   a s s o c i a t e d   w i t h   i t .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  r a t e _ i n p u t _ t r a n s f o r m  |  4  |  R a t e   I n p u t   T r a n s f o r m  | {::nomarkdown}  I f   a   r a t e   i s   s p e c i f i e d   f o r   a   v i t a l   m e a s u r e m e n t   r e c o r d ,   t h i s   f i e l d   c h e c k s \ r t h e   d a t a   v a l i d i t y .     T h e   c o d e   s t o r e d   i n   t h i s   f i e l d   s h o u l d   o n l y   b e   u p d a t e d \ r b y   s o m e o n e   w i t h   p r o g r a m m e r ' s   a c c e s s   t o   t h e   F i l e M a n .  {:/} |  S T R I N G  |  |  |  | 
|  r a t e _ h e l p  |  5  |  R a t e   H e l p  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   n a m e   o f   t h e   H e l p   F r a m e   a s s o c i a t e d   w i t h   t h i s \ r V i t a l   T y p e .  {:/} |  S T R I N G  |  |  |  | 
|  p c e _ a b b r e v i a t i o n  |  7  |  P c e   A b b r e v i a t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   P C E   A b b r e v i a t i o n   f o r   t h i s   V i t a l   T y p e .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  m a s t e r _ e n t r y _ f o r _ v u i d  |  9 9 . 9 8  |  M a s t e r   E n t r y   F o r   V U I D  | {::nomarkdown}  T h i s   f i e l d   i d e n t i f i e s   t h e   M a s t e r   e n t r y   f o r   a   V U I D   a s s o c i a t e d   w i t h   a   \ r T e r m / C o n c e p t .  {:/} |  B O O L E A N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  v u i d  |  9 9 . 9 9  |  V U I D  | {::nomarkdown}  V H A   U n i q u e   I D   ( V U I D ) .   A   u n i q u e   m e a n i n g l e s s   i n t e g e r   a s s i g n e d   t o   r e f e r e n c e \ r t e r m s   V H A   w i d e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  e f f e c t i v e _ d a t e _ t i m e  |  9 9 . 9 9 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  D e s c r i b e s   t h e   p a i r   S t a t u s   a n d   E f f e c t i v e   D a t e / T i m e   f o r   e a c h   r e f e r e n c e   t e r m .  {:/} |  [ O B J E C T ]  |  |  | [Effective_Date_time-120_5199](#Effective_Date_time-120_5199)  | 

## <a name="Effective_Date_time-120_5199"></a>Effective_Date_time-120_5199 

<dl>
<dt>id</dt><dd> E f f e c t i v e _ D a t e _ t i m e - 1 2 0 _ 5 1 9 9 </dd>
<dt>label</dt><dd> E f f e c t i v e   D a t e / t i m e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e f f e c t i v e _ d a t e _ t i m e  |  . 0 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   w h e n   t h e   S t a t u s   o f   t h e   r e f e r e n c e   t e r m   w a s   \ r e s t a b l i s h e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s t a t u s  |  . 0 2  |  S t a t u s  | {::nomarkdown}  T h e   S t a t u s   o f   a   r e f e r e n c e   t e r m   i s   e i t h e r   ' A C T I V E '   o r   ' I N A C T I V E ' .   I f   \ r ' A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   b e   a c c e s s i b l e   b y   e n d - u s e r s   t o   d o c u m e n t   a   \ r p a r t i c u l a r   p a t i e n t   e v e n t .   I f   ' I N A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   o n l y   b e   \ r a c c e s s i b l e   b y   t h e   a p p l i c a t i o n   t o   d i s p l a y   l e g a c y   d a t a .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}