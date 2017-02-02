---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Education_Topics-9999999_09 

<dl>
<dt>id</dt><dd> E d u c a t i o n _ T o p i c s - 9 9 9 9 9 9 9 _ 0 9 </dd>
<dt>fmId</dt><dd> 9 9 9 9 9 9 9 . 0 9 </dd>
<dt>label</dt><dd> E d u c a t i o n   T o p i c s </dd>
<dt>location</dt><dd> ^ A U T T E D T ( </dd>
<dt>description</dt><dd>  T h i s   f i l e   d e f i n e s   t h e   n a m e s   o f   e d u c a t i o n   t o p i c s   t o   b e   t r a c k e d   a t   y o u r \ r s i t e .   E d u c a t i o n   t o p i c s   t h a t   a r e   n o t   t o   b e   u s e d   s h o u l d   b e   m a r k e d   \  I n a c t i v e \  \ r i n   t h e   A c t i v e   S t a t u s   f i e l d . \ r   \ r C h a n g e s   t o   t h i s   d a t a   d i c t i o n a r y   s h o u l d   b e   c o o r d i n a t e d   t h r u   t h e   I H S   D B A . \ r   \ r A   x - r e f   o n   t h e   M N E M O N I C   f i e l d   w a s   a d d e d   t o   v e r s i o n   9 3 . 2 .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   P a t i e n t   E d u c a t i o n   T o p i c .   P a t i e n t   E d u c a t i o n   T o p i c s \ r a r e   t h e   s u b j e c t   o n   w h i c h   a   p a t i e n t   n e e d s   s o m e   m o r e   i n f o r m a t i o n   i n   o r d e r \ r t o   c o n t i n u e   o n   h i s   r o a d   t o   b e t t e r   h e a l t h .   F o r   e x a m p l e ,   a   p a t i e n t   m a y   h a v e   \ r h a d   s o m e   p o d i a t r y   w o r k   d o n e   a n d   r e c e i v e d   f o o t   c a r e   e d u c a t i o n .   ' f o o t   c a r e ' \ r w o u l d   b e   t h e   n a m e   o f   t h e   e d u c a t i o n   t o p i c . \ r   \ r E n t e r   a   T o p i c   t h a t   i s   3 - 3 0   c h a r a c t e r s   i n   l e n g t h .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  i n a c t i v e _ f l a g  |  . 0 3  |  I n a c t i v e   F l a g  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   i n a c t i v a t e   a n   e d u c a t i o n   t o p i c .     I f   t h i s   f i e l d \ r c o n t a i n s   a   \  1 \    t h e n   t h e   e d u c a t i o n   t o p i c   i s   i n a c t i v e .     I n a c t i v e   e d u c a t i o n \ r t o p i c s   c a n n o t   b e   s e l e c t e d   i n   t h e   m a n u a l   d a t a   e n t r y   p r o c e s s .     E d u c a t i o n \ r t o p i c   e n t r i e s   s h o u l d   b e   m a d e   i n a c t i v e   w h e n   t h e y   a r e   n o   l o n g e r   u s e d .     D o \ r n o t   d e l e t e   t h e   e n t r y   o r   c h a n g e   t h e   m e a n i n g   o f   t h e   e d u c a t i o n   t o p i c   e n t r y . \ r   \ r T o   m a k e   a n   i n a c t i v e   e d u c a t i o n   t o p i c   a c t i v e ,   e n t e r   t h e   s y m b o l   \  @ \    t o   d e l e t e \ r t h e   \  1 \    f r o m   t h e   f i e l d .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
|  p r i n t _ n a m e  |  . 0 4  |  P r i n t   N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   e d u c a t i o n   t h a t   w i l l   b e   d i s p l a y e d   i n   m e n u   s e l e c t i o n , \ r a n d   o n   H e a l t h   S u m m a r i e s .  {:/} |  S T R I N G  |  |  |  | 
|  s u b t o p i c  |  1 0  |  S u b t o p i c  |  |  [ O B J E C T ]  |  |  | [Subtopic-9999999_091001](#Subtopic-9999999_091001)  | 
|  e d u c a t i o n a l _ o u t c o m e  |  1 1  |  E d u c a t i o n a l   O u t c o m e  | {::nomarkdown}  T h i s   i s   a   s t a t e m e n t   a b o u t   w h a t   o u t c o m e   i s   e x p e c t e d   w h e n   p r o v i d i n g   t h i s \ r p a t i e n t   e d u c a t i o n .     I t   m a y   r e f l e c t   e d u c a t i o n   p l a n   a n d   g o a l s .  {:/} |  S T R I N G  |  |  |  | 
|  e d u c a t i o n a l _ s t a n d a r d s  |  1 2  |  E d u c a t i o n a l   S t a n d a r d s  | {::nomarkdown}  T h i s   i s   t h e   s t a n d a r d s   t h a t   a n d   e d u c a t o r   s h o u l d   u s e   t o   t e a c h   t h e   p a t i e n t \ r o r   f a m i l y   o r   s i g n i f i c a n t   o t h e r .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Subtopic-9999999_091001"></a>Subtopic-9999999_091001 

<dl>
<dt>id</dt><dd> S u b t o p i c - 9 9 9 9 9 9 9 _ 0 9 1 0 0 1 </dd>
<dt>label</dt><dd> S u b t o p i c </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s u b t o p i c  |  . 0 1  |  S u b t o p i c  |  |  P O I N T E R  |  | REQUIRED, INDEXED | Education_Topics-9999999_09 | 
|  s e q u e n c e  |  3  |  S e q u e n c e  | {::nomarkdown}  T h i s   f i e l d   d e f i n e s   t h e   s e q u e n c e   t h e   i t e m   s h o u l d   b e   p r e s e n t e d   i n ,   a s   i t \ r r e l a t e s   t o   o t h e r   i t e m s   m a k i n g   u p   t h e   e d u c a t i o n   t o p i c .  {:/} |  N U M E R I C  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}