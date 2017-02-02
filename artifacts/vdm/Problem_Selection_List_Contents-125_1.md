---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Problem_Selection_List_Contents-125_1 

<dl>
<dt>id</dt><dd> P r o b l e m _ S e l e c t i o n _ L i s t _ C o n t e n t s - 1 2 5 _ 1 </dd>
<dt>fmId</dt><dd> 1 2 5 . 1 </dd>
<dt>label</dt><dd> P r o b l e m   S e l e c t i o n   L i s t   C o n t e n t s </dd>
<dt>location</dt><dd> ^ G M P L ( 1 2 5 . 1 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   t h e   c a t e g o r i e s   t h a t   m a k e   u p   t h e   P r o b l e m   S e l e c t i o n \ r L i s t s   d e f i n e d   i n   f i l e   # 1 2 5 .     E a c h   e n t r y   l i n k s   a   p r o b l e m   c a t e g o r y   t o \ r a   l i s t ,   o p t i o n a l l y   w i t h   a   s u b h e a d e r   a n d   a   s e q u e n c e   o r d e r .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  l i s t  |  . 0 1  |  L i s t  | {::nomarkdown}  T h i s   i s   t h e   P r o b l e m   S e l e c t i o n   L i s t   w h i c h   i s   t o   c o n t a i n   t h e   p r o b l e m   g r o u p \ r e n t e r e d   i n   f i e l d   # 1 ;   t h i s   g r o u p   m a y   b e   a s s i g n e d   a   s e q u e n c e   n u m b e r   f o r \ r o r d e r i n g   a n d   a   s u b h e a d e r   a s   w e l l   h e r e .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Problem_Selection_List-125 | 
|  s e q u e n c e  |  1  |  S e q u e n c e  | {::nomarkdown}  T h i s   i s   a   n u m b e r   w h i c h   w i l l   d e t e r m i n e   t h e   o r d e r   t h i s   g r o u p   w i l l   a p p e a r \ r i n   t h e   c u r r e n t   l i s t ;   u p   t o   t w o   d e c i m a l   p l a c e s   m a y   b e   u s e d .  {:/} |  N U M E R I C  |  |  |  | 
|  c a t e g o r y  |  2  |  C a t e g o r y  | {::nomarkdown}  T h i s   i s   t h e   c a t e g o r y   w h o s e   p r o b l e m   i t e m s   a r e   t o   b e   i n c l u d e d   i n   t h e   c u r r e n t \ r l i s t ;   i t   m a y   h a v e   a   s u b h e a d e r   i n   t h i s   l i s t ,   a n d   a   d e s i g n a t e d   o r d e r .  {:/} |  P O I N T E R  |  | INDEXED | Problem_Selection_Category-125_11 | 
|  s u b h e a d e r  |  3  |  S u b h e a d e r  | {::nomarkdown}  T h i s   i s   t e x t   w h i c h   w i l l   a p p e a r   i n   t h e   l i s t   a s   a   s u b h e a d e r   o r   t i t l e   t o \ r t h i s   g r o u p   o f   p r o b l e m s .     I t   w i l l   h a v e   a   s i n g l e   b l a n k   r o w   b e t w e e n   i t   a n d \ r t h e   p r e v i o u s   p r o b l e m   g r o u p ,   a n d   i t   w i l l   b e   u n d e r l i n e d .  {:/} |  S T R I N G  |  |  |  | 
|  s h o w _ p r o b l e m s  |  4  |  S h o w   P r o b l e m s  | {::nomarkdown}  T h i s   f i e l d   c o n t r o l s   t h e   i n i t i a l   d i s p l a y   o f   t h i s   c a t e g o r y   i n   t h i s   s e l e c t i o n \ r l i s t .     I f   s e t   t o   Y E S ,   t h e   p r o b l e m s   w i l l   a u t o m a t i c a l l y   b e   d i s p l a y e d   a s   p a r t \ r o f   t h e   l i s t   w h e n   i t   i s   i n i t i a l l y   b u i l t   a n d   d i s p l a y e d ;   i f   n u l l   o r   N O ,   t h e \ r c a t e g o r y   m u s t   b e   s e l e c t e d   i n   o r d e r   t o   e x p a n d   t h e   l i s t   a n d   s h o w   t h e   p r o b l e m s .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}