---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Package-9_4 

<dl>
<dt>id</dt><dd> P a c k a g e - 9 _ 4 </dd>
<dt>fmId</dt><dd> 9 . 4 </dd>
<dt>label</dt><dd> P a c k a g e </dd>
<dt>location</dt><dd> ^ D I C ( 9 . 4 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   i d e n t i f i e s   t h e   e l e m e n t s   o f   a   p a c k a g e   t h a t   w i l l   b e   t r a n s p o r t e d \ r b y   t h e   i n i t i a l i z a t i o n   r o u t i n e s   c r e a t e d   b y   D I F R O M .     T h e   p r e f i x   d e t e r m i n e s \ r w h i c h   n a m e s p a c e d   e n t r i e s   w i l l   b e   r e t r i e v e d   f r o m   t h e   O p t i o n ,   B u l l e t i n , \ r H e l p   F r a m e ,   F u n c t i o n ,   a n d   S e c u r i t y   K e y   F i l e s   a s   w e l l   a s   t h e   n a m e s p a c e \ r t h a t   w i l l   b e   u s e d   t o   n a m e   t h e   I N I T   r o u t i n e s   b u i l t   b y   r u n n i n g   D I F R O M . \ r T h e   E x c l u d e d   N a m e s p a c e   f i e l d   m a y   b e   u s e d   t o   l e a v e   o u t   s o m e   o f   t h e s e   i t e m s . \ r T h e   F i l e   M u l t i p l e   d e t e r m i n e s   w h i c h   f i l e s   a r e   s e n t   w i t h   t h e   p a c k a g e   a n d \ r w h e t h e r   d a t a   i s   i n c l u d e d .     P r i n t ,   I n p u t ,   S o r t   a n d   S c r e e n   ( F O R M ) \ r t e m p l a t e s   a r e   b r o u g h t   i n   b y   n a m e s p a c e ,   f o r   t h e   f i l e s   l i s t e d   i n   t h e   F i l e \ r m u l t i p l e .     I n   a d d i t i o n ,   t h e r e   a r e   m u l t i p l e s   f o r   e a c h   t y p e   o f   t e m p l a t e , \ r t h a t   a l l o w   t h e   u s e r   t o   s p e c i f y   i n d i v i d u a l   t e m p l a t e s   o u t s i d e   t h e \ r n a m e s p a c e   t o   r e t r i e v e .     R o u t i n e s   t o   b e   r u n   b e f o r e   a n d   a f t e r   t h e \ r I N I T   a r e   s p e c i f i e d   i n   t h e   E n v i r o n m e n t   C h e c k   R o u t i n e ,   P r e - i n i t   a f t e r \ r U s e r   C o m m i t ,   a n d   P o s t - I n i t i a l i z a t i o n   R o u t i n e   f i e l d s .   T h e   r e m a i n i n g \ r f i e l d s   a r e   s i m p l y   f o r   d o c u m e n t a t i o n .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h e   n a m e   o f   t h i s   P a c k a g e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  p r e f i x  |  1  |  P r e f i x  | {::nomarkdown}  T h i s   i s   t h e   u n i q u e   n a m e s p a c e   p r e f i x   a s s i g n e d   t o   t h e   P a c k a g e ,   e . g .   X M   f o r \ r t h e   M a i l M a n   r o u t i n e s   a n d   g l o b a l s ,   D I   f o r   t h e   F i l e M a n   r o u t i n e s ,   e t c . \ r T h i s   f i e l d   i s   a p p e n d e d   t o   l e t t e r s   ( l i k e   \  I N I T \  )   t o   b e   u s e d   a s   t h e \ r n a m e s   o f   I N I T   r o u t i n e s .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  s h o r t _ d e s c r i p t i o n  |  2  |  S h o r t   D e s c r i p t i o n  | {::nomarkdown}  T h i s   i s   a   b r i e f   d e s c r i p t i o n   o f   t h i s   P a c k a g e ' s   f u n c t i o n s .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  d e s c r i p t i o n  |  3  |  D e s c r i p t i o n  | {::nomarkdown}  T h i s   i s   a   c o m p l e t e   a n d   d e t a i l e d   d e s c r i p t i o n   o f   t h e   P a c k a g e ' s   f u n c t i o n s \ r a n d   c a p a b i l i t i e s .  {:/} |  S T R I N G  |  |  |  | 
|  f i l e  |  6  |  F i l e  | {::nomarkdown}  A n y   F i l e M a n   f i l e s   w h i c h   a r e   p a r t   o f   t h i s   P a c k a g e   a r e   d o c u m e n t e d \ r h e r e .     T h i s   m u l t i p l e   c o n t r o l s   w h a t   f i l e s   ( D a t a   D i c t i o n a r i e s   a n d \ r D a t a )   a r e   s e n t   i n   a n   I N I T   b u i l t   f r o m   t h i s   P a c k a g e   e n t r y .  {:/} |  [ O B J E C T ]  |  |  | [File-9_44](#File-9_44)  | 
|  p r i n t _ t e m p l a t e  |  7  |  P r i n t   T e m p l a t e  | {::nomarkdown}  T h e   n a m e s   o f   P r i n t   T e m p l a t e s   b e i n g   s e n t   w i t h   t h i s   P a c k a g e . \ r T h i s   m u l t i p l e   i s   u s e d   t o   s e n d   n o n - n a m e s p a c e d   t e m p l a t e s   i n   a n   I N I T . \ r N a m e s p a c e d   t e m p l a t e s   a r e   s e n t   a u t o m a t i c a l l y   a n d   n e e d   n o t   b e   l i s t e d \ r s e p a r a t e l y .  {:/} |  [ O B J E C T ]  |  |  | [Print_Template-9_46](#Print_Template-9_46)  | 
|  i n p u t _ t e m p l a t e  |  8  |  I n p u t   T e m p l a t e  | {::nomarkdown}  T h e   n a m e s   o f   t h e   I n p u t   T e m p l a t e s   b e i n g   s e n t   w i t h   t h i s   P a c k a g e \ r T h i s   m u l t i p l e   i s   u s e d   t o   s e n d   n o n - n a m e s p a c e d   t e m p l a t e s   i n   a n   I N I T . \ r N a m e s p a c e d   t e m p l a t e s   a r e   s e n t   a u t o m a t i c a l l y   a n d   n e e d   n o t   b e   l i s t e d \ r s e p a r a t e l y .  {:/} |  [ O B J E C T ]  |  |  | [Input_Template-9_47](#Input_Template-9_47)  | 
|  s o r t _ t e m p l a t e  |  9  |  S o r t   T e m p l a t e  | {::nomarkdown}  T h e   n a m e s   o f   t h e   S o r t   T e m p l a t e s   b e i n g   s e n t   w i t h   t h i s   P a c k a g e . \ r T h i s   m u l t i p l e   i s   u s e d   t o   s e n d   n o n - n a m e s p a c e d   t e m p l a t e s   i n   a n   I N I T . \ r N a m e s p a c e d   t e m p l a t e s   a r e   s e n t   a u t o m a t i c a l l y   a n d   n e e d   n o t   b e   l i s t e d \ r s e p a r a t e l y .  {:/} |  [ O B J E C T ]  |  |  | [Sort_Template-9_48](#Sort_Template-9_48)  | 
|  s c r e e n _ t e m p l a t e _ f o r m  |  9 . 1  |  S c r e e n   T e m p l a t e   ( f o r m )  | {::nomarkdown}  T h e   n a m e s   o f   S c r e e n   T e m p l a t e s   ( f r o m   t h e   F O R M   f i l e )   a s s o c i a t e d   w i t h \ r t h i s   p a c k a g e .  {:/} |  [ O B J E C T ]  |  |  | [Screen_Template_form-9_485](#Screen_Template_form-9_485)  | 
|  m e n u  |  9 . 5  |  * m e n u  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   a   m e n u - t y p e   o p t i o n   i n   a n o t h e r   n a m e s p a c e .  {:/} |  [ O B J E C T ]  |  |  |  | 
|  d e v e l o p e r _ p e r s o n _ s i t e  |  1 0  |  D e v e l o p e r   ( p e r s o n / s i t e )  | {::nomarkdown}  T h e   n a m e   o f   t h e   p r i n c i p a l   D e v e l o p e r   a n d   S i t e   f o r   t h i s   P a c k a g e .  {:/} |  S T R I N G  |  |  |  | 
|  l o w e s t _ f i l e _ n u m b e r  |  1 0 . 6  |  * l o w e s t   F i l e   N u m b e r  | {::nomarkdown}  I n c l u s i v e   l o w e r   b o u n d   o f   t h e   r a n g e   o f   f i l e   n u m b e r s   a l l o c a t e d   t o   t h i s   p a c k a g e .  {:/} |  N U M E R I C  |  |  |  | 
|  h i g h e s t _ f i l e _ n u m b e r  |  1 1  |  * h i g h e s t   F i l e   N u m b e r  | {::nomarkdown}  I n c l u s i v e   u p p e r   b o u n d   o f   t h e   r a n g e   o f   f i l e   n u m b e r s   a s s i g n e d   t o   t h i s   p a c k a g e .  {:/} |  N U M E R I C  |  |  |  | 
|  d e v e l o p m e n t _ i s c  |  1 1 . 0 1  |  D e v e l o p m e n t   I s c  | {::nomarkdown}  T h e   I S C   r e s p o n s i b l e   f o r   t h e   d e v e l o p m e n t   a n d   m a n a g e m e n t   o f   t h i s   P a c k a g e .  {:/} |  S T R I N G  |  |  |  | 
|  c l a s s  |  1 1 . 3  |  C l a s s  | {::nomarkdown}  T h e   r a n k i n g   C l a s s   o f   t h i s   s o f t w a r e   P a c k a g e .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>I</dt><dd>National</dd><dt>II</dt><dd>Inactive</dd><dt>III</dt><dd>Local</dd></dl>{:/} | 
|  c u r r e n t _ v e r s i o n  |  1 3  |  C u r r e n t   V e r s i o n  | {::nomarkdown}  T h i s   f i e l d   h o l d s   t h e   v e r s i o n   n u m b e r   o f   t h e   p a c k a g e   c u r r e n t l y   r u n n i n g \ r a t   t h i s   s i t e .     W h e n   a   p a c k a g e   i n i t i a l i z a t i o n   h a s   b e e n   r u n ,   t h i s   f i e l d \ r w i l l   b e   u p d a t e d   w i t h   t h e   v e r s i o n   n u m b e r   m o s t   r e c e n t l y   i n s t a l l e d . \ r T h i s   c a n   b e   e i t h e r   u s i n g   t h e   o l d   f o r m a t   ( 1 . 0 ,   1 6 . 0 4 ,   e t c . )   o r   t h e   n e w \ r f o r m a t   ( 1 8 . 0 T 4 ,   1 9 . 1 V 2 ,   e t c . )  {:/} |  S T R I N G  |  |  |  | 
|  a d d i t i o n a l _ p r e f i x e s  |  1 4  |  A d d i t i o n a l   P r e f i x e s  |  |  [ S T R I N G ]  |  |  |  | 
|  a f f e c t s _ r e c o r d _ m e r g e  |  2 0  |  A f f e c t s   R e c o r d   M e r g e  | {::nomarkdown}  T h i s   M u l t i p u l e   l i s t s   t h e   f i l e s   t h a t   w i l l   i m p a c t   t h i s   p a c k a g e   i f   a   R e c o r d \ r M e r g e   i s   d o n e   o n   a n y   o f   t h e   f i l e s   i n   t h e   l i s t .  {:/} |  [ O B J E C T ]  |  |  | [Affects_Record_Merge-9_402](#Affects_Record_Merge-9_402)  | 
|  v e r s i o n  |  2 2  |  V e r s i o n  | {::nomarkdown}  T h e   v e r s i o n   n u m b e r s   o f   t h i s   P a c k a g e .  {:/} |  [ O B J E C T ]  |  |  | [Version-9_49](#Version-9_49)  | 
|  e n v i r o n m e n t _ c h e c k _ r o u t i n e  |  9 1 3  |  E n v i r o n m e n t   C h e c k   R o u t i n e  | {::nomarkdown}  T h e   n a m e   o f   t h e   d e v e l o p e r ' s   r o u t i n e   w h i c h   i s   r u n   a t   t h e   b e g i n n i n g   o f \ r t h e   N A M E S P A C E _ I N I T   r o u t i n e .     T h i s   s h o u l d   j u s t   c h e c k   t h e   e n v i r o n m e n t \ r a n d   s h o u l d   n o t   a l t e r   a n y   d a t a ,   s i n c e   t h e   u s e r   h a s   n o   w a y   t o   e x i t   o u t   o f \ r t h e   I N I T   p r o c e s s   u n t i l   t h i s   p r o g r a m   r u n s   t o   c o m p l e t i o n .  {:/} |  S T R I N G  |  |  |  | 
|  e n v i r o n m e n t _ c h e c k _ d o n e _ d a t e  |  9 1 3 . 5  |  E n v i r o n m e n t   C h e c k   D o n e   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   t h a t   t h e   E N V I R O N M E N T   C H E C K   r o u t i n e   l a s t   r a n .   W h e n   a n \ r I N I T   i s   r u n   a t   a   t a r g e t   s i t e ,   a n d   i t   c o n t a i n s   a n   E N V I R O N M E N T   C H E C K \ r r o u t i n e ,   t h i s   f i e l d   i s   u p d a t e d   a u t o m a t i c a l l y .  {:/} |  D A T E - T I M E  |  |  |  | 
|  p o s t i n i t i a l i z a t i o n _ r o u t i n e  |  9 1 4  |  P o s t - i n i t i a l i z a t i o n   R o u t i n e  | {::nomarkdown}  T h e   n a m e   o f   t h e   d e v e l o p e r ' s   r o u t i n e   w h i c h   i s   r u n   i m m e d i a t e l y   a f t e r   t h e \ r i n s t a l l a t i o n   o f   t h e   p a c k a g e .  {:/} |  S T R I N G  |  |  |  | 
|  p o s t i n i t _ c o m p l e t i o n _ d a t e  |  9 1 4 . 5  |  P o s t - i n i t   C o m p l e t i o n   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   t h a t   t h e   P O S T - I N I T   l a s t   r a n .     W h e n   a n \ r I N I T   i s   r u n   a t   a   t a r g e t   s i t e ,   a n d   i t   c o n t a i n s   a   P O S T - I N I T \ r r o u t i n e ,   t h i s   f i e l d   i s   u p d a t e d   a u t o m a t i c a l l y .  {:/} |  D A T E - T I M E  |  |  |  | 
|  p r e i n i t _ a f t e r _ u s e r _ c o m m i t  |  9 1 6  |  P r e - i n i t   A f t e r   U s e r   C o m m i t  | {::nomarkdown}  N a m e   o f   t h e   d e v e l o p e r ' s   r o u t i n e   t h a t   r u n s   a f t e r   t h e   u s e r   h a s   a n s w e r e d   a l l \ r o f   t h e   q u e s t i o n s   i n   N A M E S P A C E _ I N I T   b u t   b e f o r e   t h e   I N I T   f i l e s   a n y   n e w   d a t a . \ r U s e d   f o r   d a t a   c o n v e r s i o n s ,   e t c .   t h a t   t h e   d e v e l o p e r   n e e d s   t o   d o   b e f o r e \ r b r i n g i n g   i n   n e w   d a t a .  {:/} |  S T R I N G  |  |  |  | 
|  p r e i n i t _ c o m p l e t i o n _ d a t e  |  9 1 6 . 5  |  P r e - i n i t   C o m p l e t i o n   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   t h a t   t h e   P R E - I N I T   A F T E R   U S E R   C O M M I T   l a s t   r a n . \ r W h e n   a n   I N I T   i s   r u n   a t   a   t a r g e t   s i t e ,   a n d   i t   c o n t a i n s   a   P R E - I N I T \ r A F T E R   U S E R   C O M M I T   r o u t i n e ,   t h i s   f i e l d   i s   u p d a t e d   a u t o m a t i c a l l y .  {:/} |  D A T E - T I M E  |  |  |  | 
|  e x c l u d e d _ n a m e _ s p a c e  |  9 1 9  |  E x c l u d e d   N a m e   S p a c e  | {::nomarkdown}  B y   s p e c i f y i n g   a n   \  e x c l u d e d   n a m e   s p a c e \  ,   t h e   d e v e l o p e r   w i l l   b e   t e l l i n g \ r t h e   D I F R O M   r o u t i n e   n o t   t o   t a k e   O P T I O N S ,   B U L L E T I N S ,   e t c .   w h i c h   b e g i n \ r w i t h   t h e s e   c h a r a c t e r s .     F o r   e x a m p l e ,   i f   \  P S Z \    i s   a n   e x c l u d e d   n a m e   s p a c e \ r i n   t h e   \  P S \    p a c k a g e ,   D I F R O M   w i l l   n o t   s e n d   a l o n g   O P T I O N S ,   S E C U R I T Y   K E Y S , \ r B U L L E T I N S ,   o r   F U N C T I O N S   t h a t   b e g i n   w i t h   \  P S Z \  .  {:/} |  [ S T R I N G ]  |  |  |  | 
|  m a i l _ g r o u p  |  1 9 3 8  |  M a i l   G r o u p  | {::nomarkdown}  T h i s   f i e l d   p o i n t s   t o   a   m a i l   g r o u p   t h a t   w i l l   r e c e i v e   a   m a i l   m e s s a g e   f r o m \ r K I D S   w h e n   a   p a c k a g e   o r   p a t c h   i s   i n s t a l l e d .  {:/} |  P O I N T E R  |  |  | Mail_Group-3_8 | 
|  s y n o n y m  |  1 5 0 0 7  |  S y n o n y m  |  |  [ S T R I N G ]  |  |  |  | 

## <a name="File-9_44"></a>File-9_44 

<dl>
<dt>id</dt><dd> F i l e - 9 _ 4 4 </dd>
<dt>label</dt><dd> F i l e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  f i l e  |  . 0 1  |  F i l e  | {::nomarkdown}  T h e   n a m e   o f   a   V A   F i l e M a n   f i l e   w h i c h   y o u   w i s h   t o   t r a n s p o r t   w i t h \ r t h i s   p a c k a g e .     T h i s   m a y   b e   a n y   f i l e   w h o s e   n u m b e r   i s   2   o r   g r e a t e r .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | File-1 | 
|  f i e l d  |  2  |  F i e l d  | {::nomarkdown}  T h e   n a m e s   o f   t h e   F i l e M a n   F i e l d s   r e q u i r e d   b y   t h i s   P a c k a g e .     E n t e r   d a t a \ r h e r e   O N L Y   i f   y o u   w i s h   t o   s e n d   j u s t   s e l e c t e d   f i e l d s   f r o m   a   D a t a   D i c t i o n a r y \ r i n s t e a d   o f   t h e   e n t i r e   D D   ( i . e . ,   a   p a r t i a l   D D ) .  {:/} |  [ S T R I N G ]  |  |  |  | 
|  u p d a t e _ t h e _ d a t a _ d i c t i o n a r y  |  2 2 2 . 1  |  U p d a t e   T h e   D a t a   D i c t i o n a r y  | {::nomarkdown}  Y E S   m e a n s   t h a t   t h e   D a t a   D i c t i o n a r y   f o r   t h i s   f i l e   s h o u l d   b e   u p d a t e d   w h e n \ r t h i s   v e r s i o n   o f   t h e   p a c k a g e   i s   i n s t a l l e d . \ r   \ r N O   m e a n s   t h a t   t h i s   D a t a   D i c t i o n a r y   h a s   n o t   c h a n g e d   s i n c e   t h e   l a s t   v e r s i o n , \ r a n d   t h e r e f o r e ,   n e e d   n o t   b e   u p d a t e d . \ r   \ r I f   t h e   D a t a   D i c t i o n a r y   d o e s   n o t   e x i s t   o n   t h e   r e c i p i e n t   s y s t e m ,   t h e n   t h i s \ r f i e l d   d o e s   n o t   a p p l y .     T h e   D D   w i l l   b e   p u t   i n   p l a c e .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  a s s i g n _ a _ v e r s i o n _ n u m b e r  |  2 2 2 . 2  |  A s s i g n   A   V e r s i o n   N u m b e r  | {::nomarkdown}  Y E S   m e a n s   t h a t   y o u   w a n t   t o   s e t   ^ D D ( f i l e # , 0 , \  V R \  )   t o   t h e   v e r s i o n \ r n u m b e r   o f   t h i s   p a c k a g e   w h e n   t h e   i n i t   i s   f i n i s h e d . \ r   \ r N O   m e a n s   t h a t   y o u   i n t e n d   f o r   t h e   v e r s i o n   n u m b e r   t o   r e m a i n   a s   i t   i s . \ r T h i s   m a y   m e a n   t h a t   t h i s   D D   h a s   n o   v e r s i o n   n u m b e r   a t   a l l .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  m a y _ u s e r _ o v e r r i d e _ d d _ u p d a t e  |  2 2 2 . 4  |  M a y   U s e r   O v e r r i d e   D D   U p d a t e  | {::nomarkdown}  Y E S   m e a n s   t h a t   t h e   u s e r   m a y   d e c i d e   a t   i n s t a l l a t i o n   t i m e   w h e t h e r   o r   n o t \ r t o   u p d a t e   t h e   d a t a   d i c t i o n a r y   f o r   t h i s   f i l e . \ r   \ r N O   m e a n s   t h a t   t h e   d e v e l o p e r   b u i l d i n g   t h e   I N I T   i s   d e t e r m i n i n g   i f   t h e \ r d a t a   d i c t i o n a r y   i s   t o   b e   u p d a t e d .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  d a t a _ c o m e s _ w i t h _ f i l e  |  2 2 2 . 7  |  D a t a   C o m e s   W i t h   F i l e  | {::nomarkdown}  Y E S   m e a n s   t h a t   t h e   d a t a   s h o u l d   b e   i n c l u d e d   i n   t h e   i n i t i a l i z a t i o n \ r r o u t i n e s . \ r   \ r N O   m e a n s   t h a t   t h e   d a t a   s h o u l d   b e   l e f t   o u t .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  m e r g e _ o r _ o v e r w r i t e _ s i t e s _ d a t a  |  2 2 2 . 8  |  M e r g e   O r   O v e r w r i t e   S i t e ' s   D a t a  | {::nomarkdown}    \ r I f   t h e   d a t a   b e i n g   s e n t   i s   t o   b e   M E R G E D ,   t h e n   o n l y   d a t a   w h i c h   i s   n o t \ r a l r e a d y   o n   f i l e   a t   t h e   r e c i p i e n t   s i t e   w i l l   b e   p u t   i n   p l a c e . \ r   \ r I f   t h e   d a t a   b e i n g   s e n t   i s   t o   O V E R W R I T E ,   t h e n   t h e   d a t a   i n c l u d e d   i n \ r t h e   i n i t i a l i z a t i o n   r o u t i n e s   w i l l   b e   p u t   i n   p l a c e   r e g a r d l e s s   o f   w h a t \ r i s   o n   f i l e   a t   t h e   r e c i p i e n t   s i t e .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>m</dt><dd>MERGE</dd><dt>o</dt><dd>OVERWRITE</dd></dl>{:/} | 
|  m a y _ u s e r _ o v e r r i d e _ d a t a _ u p d a t e  |  2 2 2 . 9  |  M a y   U s e r   O v e r r i d e   D a t a   U p d a t e  | {::nomarkdown}  Y E S   m e a n s   t h a t   t h e   u s e r   h a s   t h e   o p t i o n   t o   d e t e r m i n e   w h e t h e r   o r   n o t \ r t o   b r i n g   i n   t h e   d a t a   t h a t   h a s   b e e n   s e n t   w i t h   t h e   p a c k a g e .     H o w e v e r , \ r h e   d o e s   n o t   g e t   t h e   a b i l i t y   t o   c h a n g e   f r o m   m e r g e   t o   o v e r w r i t e   o r \ r f r o m   o v e r w r i t e   t o   m e r g e . \ r   \ r N o   m e a n s   t h a t   t h e   d e v e l o p e r   o f   t h e   I N I T   w i l l   c o n t r o l   w h e t h e r   t h e   d a t a \ r w i l l   b e   i n s t a l l e d   a t   t h e   t a r g e t   s i t e .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
|  s c r e e n _ t o _ d e t e r m i n e _ d d _ u p d a t e  |  2 2 3  |  S c r e e n   T o   D e t e r m i n e   D D   U p d a t e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   s t a n d a r d   M U M P S   c o d e   w h i c h   i s   u s e d   t o   d e t e r m i n e \ r w h e t h e r   o r   n o t   a   d a t a   d i c t i o n a r y   s h o u l d   b e   u p d a t e d .     T h i s   c o d e   m u s t \ r s e t   $ T .     I f   $ T = 1 ,   t h e   D D   w i l l   b e   u p d a t e d .     I f   $ T = 0 ,   i t   w i l l   n o t . \ r   \ r T h i s   c o d e   w i l l   b e   e x e c u t e d   w i t h i n   V A   F i l e M a n   w h i c h   m a y   b e   b e i n g   c a l l e d \ r f r o m   w i t h i n   M a i l M a n   w h i c h   i s   b e i n g   c a l l e d   f r o m   w i t h i n   M e n u M a n . \ r N a m e s p a c e   y o u r   v a r i a b l e s .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Print_Template-9_46"></a>Print_Template-9_46 

<dl>
<dt>id</dt><dd> P r i n t _ T e m p l a t e - 9 _ 4 6 </dd>
<dt>label</dt><dd> P r i n t   T e m p l a t e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  p r i n t _ t e m p l a t e  |  . 0 1  |  P r i n t   T e m p l a t e  | {::nomarkdown}  T h e   n a m e   o f   a   P r i n t   T e m p l a t e   b e i n g   s e n t   w i t h   t h i s   P a c k a g e . \ r T h i s   m u l t i p l e   i s   u s e d   t o   s e n d   n o n - n a m e s p a c e d   t e m p l a t e s   i n   a n   I N I T . \ r N a m e s p a c e d   t e m p l a t e s   a r e   s e n t   a u t o m a t i c a l l y   a n d   n e e d   n o t   b e   l i s t e d \ r s e p a r a t e l y .     S e l e c t e d   F i e l d s   f o r   E x p o r t   a n d   E x p o r t   t e m p l a t e s   c a n n o t   b e \ r s e n t ;   e n t e r i n g   t h e i r   n a m e s   h e r e   w i l l   h a v e   n o   e f f e c t .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  f i l e  |  2  |  F i l e  | {::nomarkdown}  T h e   F i l e M a n   f i l e   f o r   t h i s   P r i n t   T e m p l a t e .  {:/} |  P O I N T E R  |  | REQUIRED | File-1 | 

## <a name="Input_Template-9_47"></a>Input_Template-9_47 

<dl>
<dt>id</dt><dd> I n p u t _ T e m p l a t e - 9 _ 4 7 </dd>
<dt>label</dt><dd> I n p u t   T e m p l a t e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  i n p u t _ t e m p l a t e  |  . 0 1  |  I n p u t   T e m p l a t e  | {::nomarkdown}  T h e   n a m e   o f   a n   I n p u t   T e m p l a t e   b e i n g   s e n t   w i t h   t h i s   P a c k a g e . \ r T h i s   m u l t i p l e   i s   u s e d   t o   s e n d   n o n - n a m e s p a c e d   t e m p l a t e s   i n   a n   I N I T . \ r N a m e s p a c e d   t e m p l a t e s   a r e   s e n t   a u t o m a t i c a l l y   a n d   n e e d   n o t   b e   l i s t e d \ r s e p a r a t e l y .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  f i l e  |  2  |  F i l e  | {::nomarkdown}  T h e   n a m e   o f   t h e   F i l e M a n   f i l e   f o r   t h i s   I n p u t   T e m p l a t e .  {:/} |  P O I N T E R  |  | REQUIRED | File-1 | 

## <a name="Sort_Template-9_48"></a>Sort_Template-9_48 

<dl>
<dt>id</dt><dd> S o r t _ T e m p l a t e - 9 _ 4 8 </dd>
<dt>label</dt><dd> S o r t   T e m p l a t e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s o r t _ t e m p l a t e  |  . 0 1  |  S o r t   T e m p l a t e  | {::nomarkdown}  T h e   n a m e   o f   a   S o r t   T e m p l a t e   b e i n g   s e n t   w i t h   t h i s   P a c k a g e . \ r T h i s   m u l t i p l e   i s   u s e d   t o   s e n d   n o n - n a m e s p a c e d   t e m p l a t e s   i n   a n   I N I T . \ r N a m e s p a c e d   t e m p l a t e s   a r e   s e n t   a u t o m a t i c a l l y   a n d   n e e d   n o t   b e   l i s t e d \ r s e p a r a t e l y .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  f i l e  |  2  |  F i l e  | {::nomarkdown}  T h e   F i l e M a n   f i l e   f o r   t h i s   S o r t   T e m p l a t e .  {:/} |  P O I N T E R  |  | REQUIRED | File-1 | 

## <a name="Screen_Template_form-9_485"></a>Screen_Template_form-9_485 

<dl>
<dt>id</dt><dd> S c r e e n _ T e m p l a t e _ f o r m - 9 _ 4 8 5 </dd>
<dt>label</dt><dd> S c r e e n   T e m p l a t e   ( f o r m ) </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s c r e e n _ t e m p l a t e _ f o r m  |  . 0 1  |  S c r e e n   T e m p l a t e   ( f o r m )  | {::nomarkdown}  T h e   n a m e   o f   a   S c r e e n   T e m p l a t e   ( f r o m   t h e   F O R M   f i l e )   a s s o c i a t e d   w i t h \ r t h i s   P a c k a g e .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  f i l e  |  2  |  F i l e  | {::nomarkdown}  T h e   n a m e   o f   t h e   F i l e M a n   f i l e   f o r   t h i s   S c r e e n   T e m p l a t e   ( F O R M ) .  {:/} |  P O I N T E R  |  | REQUIRED | File-1 | 

## <a name="Affects_Record_Merge-9_402"></a>Affects_Record_Merge-9_402 

<dl>
<dt>id</dt><dd> A f f e c t s _ R e c o r d _ M e r g e - 9 _ 4 0 2 </dd>
<dt>label</dt><dd> A f f e c t s   R e c o r d   M e r g e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  f i l e _ a f f e c t e d  |  . 0 1  |  F i l e   A f f e c t e d  | {::nomarkdown}  A   f i l e   t h a t   i f   m e r g e d   w i l l   a f f e c t   t h i s   p a c k a g e .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | File-1 | 
|  n a m e _ o f _ m e r g e _ r o u t i n e  |  3  |  N a m e   O f   M e r g e   R o u t i n e  | {::nomarkdown}  T h i s   f i e l d   h o l d s   t h e   r o u t i n e   n a m e   t o   c a l l   w h e n   t w o   r e c o r d s   i n \ r a n   a f f e c t e d   f i l e   a r e   t o   b e   m e r g e d .   T h i s   a l l o w s   t h e   p a c k a g e   t o \ r d o   a n y   r e p o i n t i n g   o r   o t h e r   c l e a n - u p   n e e d e d   b e f o r e   t h e   r e c o r d s \ r a r e   m e r g e d .  {:/} |  S T R I N G  |  |  |  | 
|  r e c o r d _ h a s _ p a c k a g e _ d a t a  |  4  |  R e c o r d   H a s   P a c k a g e   D a t a  |  |  S T R I N G  |  |  |  | 

## <a name="Version-9_49"></a>Version-9_49 

<dl>
<dt>id</dt><dd> V e r s i o n - 9 _ 4 9 </dd>
<dt>label</dt><dd> V e r s i o n </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  v e r s i o n  |  . 0 1  |  V e r s i o n  | {::nomarkdown}  T h e   v e r s i o n   n u m b e r   o f   t h i s   P a c k a g e .     T h i s   n u m b e r   i s   u p d a t e d   a u t o m a t i c a l l y \ r w h e n   a n   I N I T   i s   b u i l t   f o r   t h i s   p a c k a g e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  d a t e _ d i s t r i b u t e d  |  1  |  D a t e   D i s t r i b u t e d  | {::nomarkdown}  T h e   d a t e   t h i s   r e l e a s e   w a s   d i s t r i b u t e d .     T h i s   f i e l d   i s   u p d a t e d   a u t o m a t i c a l l y \ r w h e n   a n   I N I T   i s   b u i l t   f o r   t h i s   p a c k a g e .  {:/} |  D A T E - T I M E  |  |  |  | 
|  d a t e _ i n s t a l l e d _ a t _ t h i s _ s i t e  |  2  |  D a t e   I n s t a l l e d   A t   T h i s   S i t e  | {::nomarkdown}  T h e   d a t e   t h i s   r e l e a s e   w a s   i n s t a l l e d   a t   t h i s   s i t e .     T h i s   f i e l d   i s   u p d a t e d \ r a u t o m a t i c a l l y   w h e n   a n   I N I T   i s   i n s t a l l e d   f o r   t h i s   p a c k a g e .  {:/} |  D A T E - T I M E  |  |  |  | 
|  i n s t a l l e d _ b y  |  3  |  I n s t a l l e d   B y  | {::nomarkdown}  T h i s   i s   t h e   p e r s o n   w h o   i n s t a l l e d   t h i s   v e r s i o n   a t   t h i s   s i t e .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  d e s c r i p t i o n _ o f _ e n h a n c e m e n t s  |  4 1  |  D e s c r i p t i o n   O f   E n h a n c e m e n t s  | {::nomarkdown}  T h i s   i s   a   d e s c r i p t i o n   o f   t h e   e n h a n c e m e n t s   b e i n g   d i s t r i b u t e d   w i t h   t h i s \ r r e l e a s e .  {:/} |  S T R I N G  |  |  |  | 
|  p a t c h _ a p p l i c a t i o n _ h i s t o r y  |  1 1 0 5  |  P a t c h   A p p l i c a t i o n   H i s t o r y  |  |  [ O B J E C T ]  |  |  |  { i d : P a t c h _ A p p l i c a t i o n _ H i s t o r y - 9 _ 4 9 0 1 , f m I d : 9 . 4 9 0 1 , l a b e l : P a t c h   A p p l i c a t i o n   H i s t o r y , p r o p e r t i e s : [ { i d : p a t c h _ a p p l i c a t i o n _ h i s t o r y , f m I d : . 0 1 , l a b e l : P a t c h   A p p l i c a t i o n   H i s t o r y , d a t a t y p e : S T R I N G , i n d e x e d : t r u e , r e q u i r e d : t r u e } , { i d : d a t e _ a p p l i e d , f m I d : . 0 2 , l a b e l : D a t e   A p p l i e d , d a t a t y p e : D A T E - T I M E } , { i d : a p p l i e d _ b y , f m I d : . 0 3 , l a b e l : A p p l i e d   B y , d a t a t y p e : P O I N T E R , r a n g e : { i d : N e w _ P e r s o n - 2 0 0 } } , { i d : d e s c r i p t i o n , f m I d : 1 , l a b e l : D e s c r i p t i o n , d e s c r i p t i o n : T h i s   i s   a   d e s c r i p t i o n   o f   t h e   p a t c h   b e i n g   d i s t r i b u t e d   w i t h   t h i s   r e l e a s e . , d a t a t y p e : S T R I N G , i s W P : t r u e } ] }  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}