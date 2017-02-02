---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Help_Frame-9_2 

<dl>
<dt>id</dt><dd> H e l p _ F r a m e - 9 _ 2 </dd>
<dt>fmId</dt><dd> 9 . 2 </dd>
<dt>label</dt><dd> H e l p   F r a m e </dd>
<dt>location</dt><dd> ^ D I C ( 9 . 2 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   t h e   t e x t   o f   h e l p   f r a m e s   c r e a t e d   v i a   t h e   H e l p \ r P r o c e s s o r   ( X Q H ) .     H e l p   f r a m e s   m a y   b e   a s s o c i a t e d   w i t h   o p t i o n s   o r   w i t h \ r d a t a   d i c t i o n a r y   f i e l d s   t o   p r o v i d e   o n - l i n e   i n s t r u c t i o n .     T h e   f i l e \ r i s   c r o s s - r e f e r e n c e d   b y   n a m e ,   h e a d e r ,   d a t e   e n t e r e d ,   a u t h o r ,   a n d   e d i t o r . \ r \ r \ r  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n u m b e r  |  . 0 0 1  |  N u m b e r  | {::nomarkdown}  T h i s   f i e l d   u n i q u e l y   i d e n t i f i e s   a   h e l p   f r a m e .  {:/} |  I E N  |  |  |  | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h e   u n i q u e   n a m e   o f   t h e   f r a m e ,   p r e c e d e d   w i t h   t h e   p a c k a g e   p r e f i x   n a m e , \ r s i m i l a r   t o   o p t i o n   n a m e s .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  h e a d e r  |  1  |  H e a d e r  | {::nomarkdown}  A   s h o r t   d e s c r i p t i o n   o f   t h e   f r a m e ,   s u c c i n c t l y   d e s c r i b i n g   t h e   c o n t e n t \ r o f   t h e   f r a m e  {:/} |  S T R I N G  |  |  |  | 
|  t e x t  |  2  |  T e x t  | {::nomarkdown}  T h e   a c t u a l   t e x t   o f   t h e   h e l p   f r a m e ,   w h i c h   w i l l   b e   d i s p l a y e d   w h e n   t h e   u s e r \ r p r e s s e s   q u e s t i o n   m a r k .     S c r e e n   b r e a k s   a r e   i n d i c a t e d   b y   a   l i n e   t e r m i n a t i n g \ r w i t h   \  . . \  . \ r c o n t i n u a t i o n   s c r e e n s ,   o r   ' r e l a t e d   f r a m e s ' .  {:/} |  S T R I N G  |  |  |  | 
|  r e l a t e d _ f r a m e  |  3  |  R e l a t e d   F r a m e  | {::nomarkdown}  T h i s   i s   a   m u l t i p l e   f i e l d   w h i c h   c o n t a i n s   i n f o r m a t i o n   o n   t h e   o t h e r   h e l p \ r f r a m e s   w h i c h   a r e   r e l a t e d   t o   t h e   c u r r e n t   h e l p   f r a m e   t h r o u g h   s p e c i f i c \ r k e y w o r d s .     T h e   k e y w o r d s   m a y   b e   s e l e c t e d   t o   o b t a i n   a d d i t i o n a l   i n f o r m a t i o n \ r a b o u t   t h e   t o p i c   t h r o u g h   t h e   r e l a t e d   h e l p   f r a m e ( s ) .  {:/} |  [ O B J E C T ]  |  |  | [Related_Frame-9_22](#Related_Frame-9_22)  | 
|  w a n t _ t o _ l o a d _ k e y w o r d s _ y _ n  |  3 . 5  |  W a n t   T o   L o a d   K e y w o r d s   ( y / n ) ?  | {::nomarkdown}  T h i s   f i e l d   i s   d e s i g n e d   f o r   i n t e r n a l   u s e .     I t s   i n p u t   t r a n s f o r m   w i l l \ r i n v o k e   a   r o u t i n e   t o   a s s o c i a t e   k e y w o r d s   w i t h   r e l a t e d   h e l p   f r a m e s .  {:/} |  S T R I N G  |  |  |  | 
|  d a t e _ e n t e r e d  |  4  |  D a t e   E n t e r e d  | {::nomarkdown}  D a t e / t i m e   t h a t   t h i s   f r a m e   w a s   e n t e r e d   i n t o   t h e   s y s t e m ,   w h i c h   i s   u s e d   t o   \ r t r a c k   n e w   H e l p   f r a m e   a c t i v i t y .  {:/} |  D A T E - T I M E  |  | INDEXED |  | 
|  i n v o k e d _ b y _ r o u t i n e  |  5  |  I n v o k e d   B y   R o u t i n e  | {::nomarkdown}  T h i s   f i e l d   i s   f o r   d o c u m e n t a t i o n   p u r p o s e s .     I t   s e r v e s   a s   a   r e c o r d   o f   w h i c h \ r r o u t i n e s   r e f e r e n c e   a   p a r t i c u l a r   h e l p   f r a m e .  {:/} |  [ S T R I N G ]  |  |  |  | 
|  a u t h o r  |  6  |  A u t h o r  | {::nomarkdown}  T h e   p e r s o n   w h o   c r e a t e d   t h e   e n t r y   f o r   t h i s   h e l p   f r a m e .     T h i s   i s   a   t r i g g e r e d \ r f i e l d ,   i t ' s   v a l u e   d e t e r m i n e d   b y   t h e   c r e a t o r   o f   t h e   . 0 1   e n t r y .  {:/} |  P O I N T E R  |  | INDEXED | [New_Person-200](New_Person-200.md) | 
|  e d i t o r  |  7  |  E d i t o r  | {::nomarkdown}  U s e r s   w h o   a r e   a l l o w e d   t o   e d i t   t h i s   h e l p   f r a m e ,   a s   d e t e r m i n e d   b y   t h e   a u t h o r .  {:/} |  [ P O I N T E R ]  |  |  |  { i d : N e w _ P e r s o n - 2 0 0 }  | 
|  e n t r y _ e x e c u t e _ s t a t e m e n t  |  1 0 . 1  |  E n t r y   E x e c u t e   S t a t e m e n t  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   i n c l u d e   a n   M   c o d e   s t a t e m e n t   w h i c h   i s   e x e c u t e d   a s   t h e \ r u s e r   e n t e r s   t h i s   h e l p   f r a m e .  {:/} |  S T R I N G  |  |  |  | 
|  e x i t _ e x e c u t e _ s t a t e m e n t  |  1 0 . 2  |  E x i t   E x e c u t e   S t a t e m e n t  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   p r o v i d e   a n   M   c o d e   s t a t e m e n t   w h i c h   i s   t o   b e   e x e c u t e d \ r a s   t h e   u s e r   e x i t s   t h e   c u r r e n t   h e l p   f r a m e   ( w h e t h e r   m o v i n g   i n t o   a n o t h e r   h e l p \ r f r a m e   o r   b a c k   o u t   o f   t h e   c u r r e n t   h e l p   f r a m e ) .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Related_Frame-9_22"></a>Related_Frame-9_22 

<dl>
<dt>id</dt><dd> R e l a t e d _ F r a m e - 9 _ 2 2 </dd>
<dt>label</dt><dd> R e l a t e d   F r a m e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  r e l a t e d _ f r a m e _ k e y w o r d  |  . 0 1  |  R e l a t e d   F r a m e   K e y w o r d  | {::nomarkdown}  A   k e y w o r d   a p p e a r s   i n   t h e   t e x t   s u r r o u n d e d   b y   b r a c k e t s .     W h e n   t h e   u s e r \ r e n t e r s   t h e   k e y w o r d ,   a   r e l a t e d   f r a m e   w i l l   b e   d i s p l a y e d   w i t h   m o r e   d e t a i l e d \ r i n f o r m a t i o n   o n   t h e   t o p i c   s u g g e s t e d   b y   t h e   k e y w o r d .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  r e l a t e d _ f r a m e  |  1  |  R e l a t e d   F r a m e  | {::nomarkdown}  T h e   i n t e r n a l   n a m e   o f   a n o t h e r   h e l p - f r a m e   w h i c h   c a n   b e   i n v o k e d   b y   t h e \ r k e y w o r d   t o   o b t a i n   m o r e   d e t a i l e d   i n f o r m a t i o n   o n   a   s u b - t o p i c .  {:/} |  P O I N T E R  |  | INDEXED | Help_Frame-9_2 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}