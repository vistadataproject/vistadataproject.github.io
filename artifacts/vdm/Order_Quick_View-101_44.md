---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Quick_View-101_44 

<dl>
<dt>id</dt><dd> O r d e r _ Q u i c k _ V i e w - 1 0 1 _ 4 4 </dd>
<dt>fmId</dt><dd> 1 0 1 . 4 4 </dd>
<dt>label</dt><dd> O r d e r   Q u i c k   V i e w </dd>
<dt>location</dt><dd> ^ O R D ( 1 0 1 . 4 4 , </dd>
<dt>description</dt><dd>  T h e   n e w e r   C P R S   o r d e r i n g   d i a l o g s   u s e   a   W i n d o w s   L i s t v i e w   c o n t r o l   f o r \ r d i s p l a y i n g   l i s t s   o f   o r d e r a b l e   i t e m s   a n d   q u i c k   o r d e r s .     U s i n g   t h i s   c o n t r o l \ r w i l l   h e l p   u s   r e l y   l e s s   o n   c u s t o m   b u i l t   c o n t r o l s   t o   h a n d l e   l o n g   l i s t s   o f \ r i t e m s .     W h i l e   t h e   L i s t v i e w   c o n t r o l   i s   a b l e   t o   o p e r a t e   o n   l o n g   l i s t s   o f \ r i t e m s ,   i t   m u s t   k n o w   a t   t h e   o u t s e t   h o w   m a n y   i t e m s   a r e   p o t e n t i a l l y   g o i n g   t o \ r d i s p l a y   a n d   m u s t   b e   a b l e   t o   m a p   f r o m   a n y   s e q u e n c e   n u m b e r   p r o d u c e d   b y   t h e \ r L i s t v i e w   c o n t r o l     t o   a   s p e c i f i c   i t e m   i n   t h e   l i s t .     T h e   O R D E R   Q U I C K   V I E W \ r f i l e   ( 1 0 1 . 4 4 )   p r o v i d e s   t h i s   m a p p i n g .     I t   m a p s   a   s u b s e t   o f   o r d e r a b l e   i t e m s \ r o r   q u i c k   o r d e r s   i n   a l p h a b e t i c a l   o r d e r   t o   s p e c i f i c   s e q u e n c e   n u m b e r s .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   f o r   t h e   l i s t   t o   b e   d i s p l a y e d   b y   a   W i n d o w s   L i s t v i e w \ r c o n t r o l .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  l a s t _ u p d a t e  |  6  |  L a s t   U p d a t e  | {::nomarkdown}  T h e   c o n t a i n s   t h e   t i m e   w h e n   t h e   i t e m s   i n   t h e   l i s t   w e r e   l a s t   b u i l t .  {:/} |  S T R I N G  |  |  |  | 
|  q u i c k _ o r d e r  |  1 0  |  Q u i c k   O r d e r  | {::nomarkdown}  T h i s   m u l t i p l e   c o n t a i n s   t h e   q u i c k   o r d e r s   t h a t   b e l o n g   t o   a   g i v e n   l i s t .  {:/} |  [ O B J E C T ]  |  |  | [Quick_Order-101_441](#Quick_Order-101_441)  | 
|  s e t _ m e m b e r  |  2 0  |  S e t   M e m b e r  | {::nomarkdown}  T h i s   m u l t i p l e   c o n t a i n s   t h e   o r d e r a b l e   i t e m s   i n   a   s p e c i f i c   s u b s e t   ( l a b , \ r i n p a t i e n t   m e d s ,   d i e t s ,   e t c . ) .  {:/} |  [ O B J E C T ]  |  |  | [Set_Member-101_442](#Set_Member-101_442)  | 

## <a name="Quick_Order-101_441"></a>Quick_Order-101_441 

<dl>
<dt>id</dt><dd> Q u i c k _ O r d e r - 1 0 1 _ 4 4 1 </dd>
<dt>label</dt><dd> Q u i c k   O r d e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  q u i c k _ o r d e r  |  . 0 1  |  Q u i c k   O r d e r  | {::nomarkdown}  T h i s   p o i n t s   t o   a   q u i c k   o r d e r   i n   t h e   O r d e r   D i a l o g   f i l e   ( 1 0 1 . 4 1 ) .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Order_Dialog-101_41 | 
|  d i s p l a y _ t e x t  |  2  |  D i s p l a y   T e x t  | {::nomarkdown}  T h i s   c o n t a i n s   t h e   t e x t   t o   d i s p l a y   i n   t h e   v i e w   l i s t .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Set_Member-101_442"></a>Set_Member-101_442 

<dl>
<dt>id</dt><dd> S e t _ M e m b e r - 1 0 1 _ 4 4 2 </dd>
<dt>label</dt><dd> S e t   M e m b e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s e t _ m e m b e r  |  . 0 1  |  S e t   M e m b e r  | {::nomarkdown}  T h i s   p o i n t s   t o   a n   i t e m   i n   t h e   O r d e r a b l e   I t e m   f i l e   ( 1 0 1 . 4 3 ) .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Orderable_Items-101_43 | 
|  d i s p l a y _ t e x t  |  2  |  D i s p l a y   T e x t  | {::nomarkdown}  T h i s   i s   t h e   t e x t   t h a t   i s   d i s p l a y e d   i n   t h e   v i e w   l i s t .  {:/} |  S T R I N G  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}