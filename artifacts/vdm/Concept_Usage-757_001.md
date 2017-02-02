---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Concept_Usage-757_001 

<dl>
<dt>id</dt><dd> C o n c e p t _ U s a g e - 7 5 7 _ 0 0 1 </dd>
<dt>fmId</dt><dd> 7 5 7 . 0 0 1 </dd>
<dt>label</dt><dd> C o n c e p t   U s a g e </dd>
<dt>location</dt><dd> ^ L E X ( 7 5 7 . 0 0 1 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   r e c o r d s   t h e   u s a g e   o f   c o n c e p t s   b y   a p p l i c a t i o n s   p e r f o r m i n g   l o o k u p s \ r u s i n g   t h e   S p e c i a l   L o o k u p   R o u t i n e s   p r o v i d e d   w i t h   t h e   L e x i c o n   U t i l i t y .     A   l i s t i n g \ r o f   c o n c e p t   u s a g e   i n   d e c e n d i n g   o r d e r   m a y   b e   f o u n d   a t   t h e   \  A F \    i n d e x .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  m a j o r _ c o n c e p t  |  . 0 1  |  M a j o r   C o n c e p t  | {::nomarkdown}  T h i s   i s   a   p o i n t e r   t o   t h e   M a j o r   C o n c e p t   ( f i l e   # 7 5 7 )   a n d   u s e d   t o   l i n k   t h e   c o n c e p t \ r f r e q u e n c y   o f   u s e   b a c k   t o   t h e   M a j o r   C o n c e p t .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Major_Concept_Map-757](Major_Concept_Map-757.md) | 
|  o r i g i n a t i n g _ v a l u e  |  1  |  O r i g i n a t i n g   V a l u e  | {::nomarkdown}  I t   w a s   n e c e s s a r y   t o   \  s e e d \    t h i s   f i l e   p r i o r   t o   e x p o r t .     T h i s   f i e l d   r e p r e s e n t s \ r t h e   o r i g i n a l   ( e x p o r t e d )   v a l u e   o f   t h e   f r e q u e n c y   o f   u s e   ( U s a g e ,   f i e l d   # 2 ) .     T o \ r o b t a i n   t h e   a c t u a l   f r e q u e n c y   o f   u s e ,   t h i s   v a l u e   m u s t   b e   s u b t r a c t e d   f r o m   t h e   \ r F r e q u e n c y   f i e l d   ( # 2 ) .  {:/} |  N U M E R I C  |  | REQUIRED |  | 
|  f r e q u e n c y  |  2  |  F r e q u e n c y  | {::nomarkdown}  T h i s   v a l u e   i s   i n c r e m e n t e d   e a c h   t i m e   t h e   u s e r   s e l e c t s   a   c o n c e p t   f r o m   t h e   L e x i c o n \ r u s i n g   t h e   S p e c i a l   L o o k u p   R o u t i n e s   s u p p l i e d   w i t h   t h e   L e x i c o n   U t i l i t y .     O v e r   t i m e , \ r i t   w i l l   s h o w   t h e   f r e q u e n c y   o f   u s e   o f   e a c h   o f   t h e   c o n c e p t s   c o n t a i n e d   i n   t h e \ r L e x i c o n .     A d d i t i o n a l l y ,   i t   i s   u s e d   t o   o r d e r   t h e   s e l e c t i o n   l i s t   i n   t h e   S p e c i a l \ r L o o k u p   R o u t i n e s ,   p l a c i n g   t h e   m o s t   f r e q u e n t l y   u s e d   c o n c e p t s   a t   t h e   t o p   o f   t h e \ r l i s t .  {:/} |  N U M E R I C  |  | REQUIRED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}