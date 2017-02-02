---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Request_Action_Types-123_1 

<dl>
<dt>id</dt><dd> R e q u e s t _ A c t i o n _ T y p e s - 1 2 3 _ 1 </dd>
<dt>fmId</dt><dd> 1 2 3 . 1 </dd>
<dt>label</dt><dd> R e q u e s t   A c t i o n   T y p e s </dd>
<dt>location</dt><dd> ^ G M R ( 1 2 3 . 1 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   i d e n t i f i e s   t h e   a c t i o n   t y p e s   w h i c h   m a y   b e   u s e d   b y   a   s e r v i c e   t o   \ r t r a c k   a c t i v i t y   r e l a t e d   t o   a   c o n s u l t   o r   r e q u e s t . \ r     \ r C e r t a i n   a c t i o n   t y p e s   m a y   h a v e   a   \  G M R C A C T   \    p r o t o c o l   e n t r y   i n   t h e   P r o t o c o l \ r F i l e   ( 1 0 1 )   w h i c h   c o r r e s p o n d s   t o   t h e   a c t i o n   t y p e .     T w o   a c t i o n s   s h o u l d   n o t   \ r p o i n t   t o   t h e   s a m e   p r o t o c o l .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n u m b e r  |  . 0 0 1  |  N u m b e r  | {::nomarkdown}  T h e   i n t e r n a l   e n t r y   n u m b e r   o f   t h e   R e q u e s t   A c t i o n   T y p e .  {:/} |  I E N  |  |  |  | 
|  a c t i o n _ t y p e  |  . 0 1  |  A c t i o n   T y p e  | {::nomarkdown}  T h i s   f i l e   c o n t a i n s   t h e   t r a c k i n g   a c t i o n s   w h i c h   m a y   b e   t a k e n   t o   t r a c k \ r a   C o n s u l t   o r   R e q u e s t   o r d e r   f r o m   i t s   e n t r y   i n   C P R S   t h r o u g h   i t s \ r r e s o l u t i o n . \ r   \ r T h i s   f i l e   a l s o   c o n t a i n s   r e l a t i o n s h i p s   o f   C P R S   s t a t u s e s   w h i c h   a r e   t h e \ r r e s u l t   o f   t h e   a c t i o n   t a k e n .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  r e l a t e d _ o e _ r r _ s t a t u s  |  1  |  R e l a t e d   O e / r r   S t a t u s  | {::nomarkdown}  T h i s   i s   t h e   C P R S   s t a t u s   w h i c h   w i l l   b e   u s e d   t o   u p d a t e   t h e   o r d e r   i n   O E / R R \ r w h e n   t h i s   a c t i o n   i s   t a k e n .  {:/} |  P O I N T E R  |  | INDEXED | Order_Status-100_01 | 
|  d i s a b l e d _ m e s s a g e  |  3  |  D i s a b l e d   M e s s a g e  | {::nomarkdown}  T h i s   f i e l d   d i s p l a y s   a   ' D I S A B L E D '   m e s s a g e   w h e n   t h i s   C P R S   s t a t u s   h a s   b e e n \ r d i s a b l e d .  {:/} |  S T R I N G  |  |  |  | 
|  h l 7 _ c o n t r o l _ c o d e _ f r o m _ c o n s u l t s  |  4  |  H l 7   C o n t r o l   C o d e   F r o m   C o n s u l t s  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h a t   H L 7   c o n t r o l   c o d e   i s   p a s s e d   t o   C P R S   f r o m \ r C o n s u l t s . \ r         E x a m p l e :   \ r                           \  S N \  = S e r v i c e   e n t e r e d ,   b a c k d o o r   c o n s u l t ,   a u t o m a t i c a l l y \ r r e l e a s e d   f r o m   C P R S ,   t h o u g h   s i g n a t u r e s   m a y   s t i l l   b e   r e q u i r e d   d e p e n d i n g   o n \ r n a t u r e   o f   o r d e r \ r                           \  O D \  = D i s c o n t i n u e d \ r                           \  O C \  = D e n i e d   b y   s e r v i c e   ( C a n c e l l e d ) \ r                           \  S C \  = S e r v i c e   s t a t u s   u p d a t e   ( g e n e r i c   s t a t u s   c h a n g e )   f o r   a c t i v e \ r a n d   p a r t i a l   r e s u l t s \ r                           \  X X \  = F o r w a r d e d \ r                           \  R E \  = C o m p l e t e d  {:/} |  S T R I N G  |  |  |  | 
|  h l 7 _ c o n t r o l _ c o d e _ f r o m _ c p r s  |  5  |  H l 7   C o n t r o l   C o d e   F r o m   C p r s  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   w h a t   H L 7   c o n t r o l   c o d e   i s   p a s s e d   f r o m   C P R S   t o \ r C o n s u l t s . \ r         E x a m p l e :   \  N W \  = N e w   c o n s u l t   e n t e r e d   a n d   r e l e a s e d   t h r o u g h   C P R S \ r                           \  C A \  = C a n c e l l e d   v i a   t h e   o r d e r s   t a b \ r                           \  D C \  = D i s c o n t i n u e d  {:/} |  S T R I N G  |  | INDEXED |  | 
|  h l 7 _ t a b l e _ 3 8 _ o r d e r _ s t a t u s  |  6  |  H l 7   T a b l e   3 8   O r d e r   S t a t u s  | {::nomarkdown}  T h i s   f i e l d   i s   f o r   d o c u m e n t i n g   p u r p o s e s   a n d   c o n t a i n s   t h e   r e l a t e d   T a b l e   3 8 \ r o r d e r   s t a t u s   f r o m   H L 7   f o r   e a c h   a c t i v i t y .  {:/} |  S T R I N G  |  |  |  | 
|  a c t i o n _ p r i n t _ n a m e  |  7  |  A c t i o n   P r i n t   N a m e  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   o n   t h e   5 1 3   F o r m   a s   a   h e a d e r   f o r   c o m m e n t s .  {:/} |  S T R I N G  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}