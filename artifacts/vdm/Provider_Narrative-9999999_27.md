---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Provider_Narrative-9999999_27 

<dl>
<dt>id</dt><dd> P r o v i d e r _ N a r r a t i v e - 9 9 9 9 9 9 9 _ 2 7 </dd>
<dt>fmId</dt><dd> 9 9 9 9 9 9 9 . 2 7 </dd>
<dt>label</dt><dd> P r o v i d e r   N a r r a t i v e </dd>
<dt>location</dt><dd> ^ A U T N P O V ( </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   e a c h   u n i q u e   P O V   N A R R A T I V E   Q U A L I F I E R . \ r   \ r  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a r r a t i v e  |  . 0 1  |  N a r r a t i v e  | {::nomarkdown}  T h i s   i s   t h e   N a r r a t i v e   t h a t   t h e   p r o v i d e r   h a s   w r i t t e n   o u t   t h a t   i s   h i s \ r d e s c r i p t i o n   o f   w h a t   h e   t r e a t e d   t h e   p a t i e n t   f o r . \ r   \ r E n t e r   a   2   t o   8 0   c h a r a c t e r   d e s c r i p t i o n .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  m n e m o n i c  |  8 8 0 1  |  M n e m o n i c  | {::nomarkdown}  T h i s   i s   a   m n e m o n i c   t h a t   s t a n d s   f o r   t h i s   p r o v i d e r   n a r r a t i v e . \ r   \ r E n t e r   a   1 - 2   c h a r a c t e r   m n e m o n i c . \ r E n t e r   a   1 - 2   c h a r a c t e r   m n e m o n i c .  {:/} |  S T R I N G  |  |  |  | 
|  c l i n i c a l _ l e x i c o n  |  7 5 7 0 1  |  C l i n i c a l   L e x i c o n  | {::nomarkdown}  T h i s   i s   t h e   c l i n i c a l   e x p r e s s i o n   r e l a t e d   t o   t h e   p r o v i d e r   n a r r a t i v e .  {:/} |  P O I N T E R  |  |  | [Expressions-757_01](Expressions-757_01.md) | 
|  o r i g i n a t i n g _ f i l e  |  7 5 7 0 2  |  O r i g i n a t i n g   F i l e  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   i n   t h e   V A   t o   i d e n t i f y   w h a t   f i l e   p o i n t i n g   t o   t h e \ r p r o v i d e r   n a r r a t i v e   f i l e   c r e a t e d   t h e   e n t r y   i n   t h e   P r o v i d e r   N a r r a t i v e \ r F i l e .     T h i s   m a y   b e   u s e f u l   a s   m o r e   p a c k a g e s   c r e a t e   p o i n t e r s   t o   t h e \ r P r o v i d e r   N a r r a t i v e   F i l e   t o   s t o r e   t h e   l o c a l   c a p t u r e   o f   p r o v i d e r   t e r m i n o l o g y . \ r     \ r T h e   P r o b l e m   L i s t   p a c k a g e   p u t s   i t s   f r e e   t e x t   f i l e   n u m b e r   i n   t h i s   f i e l d \ r w h e n   i t   a d d s   p r o v i d e r   n a r r a t i v e s   t o   t h e   P r o v i d e r   N a r r a t i v e   F i l e .  {:/} |  S T R I N G  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}