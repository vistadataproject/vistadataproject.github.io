---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Adverse_Reaction_Assessment-120_86 

<dl>
<dt>id</dt><dd> A d v e r s e _ R e a c t i o n _ A s s e s s m e n t - 1 2 0 _ 8 6 </dd>
<dt>fmId</dt><dd> 1 2 0 . 8 6 </dd>
<dt>label</dt><dd> A d v e r s e   R e a c t i o n   A s s e s s m e n t </dd>
<dt>location</dt><dd> ^ G M R ( 1 2 0 . 8 6 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   i s   a   l i s t i n g   o f   a l l   t h e   p a t i e n t s   w h o   h a v e   b e e n   a s k e d   a b o u t \ r a l l e r g i e s / a d v e r s e   r e a c t i o n s .   I t   c o n t a i n s   a   p o i n t e r   t o   F i l e   2   ( P A T I E N T ) ,   a \ r f l a g   t o   i n d i c a t e   i f   t h e   p a t i e n t   h a s   o r   d o e s   n o t   h a v e   a n   A l l e r g y / A d v e r s e \ r R e a c t i o n ,   t h e   p e r s o n   m a k i n g   t h e   a s s e s s m e n t   a n d   t h e   d a t e / t i m e   o f   t h e \ r a s s e s s m e n t .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   p a t i e n t   w h o   h a s   b e e n   a s k e d   a b o u t   a l l e r g i e s / a d v e r s e   r e a c t i o n s .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
|  r e a c t i o n _ a s s e s s m e n t  |  1  |  R e a c t i o n   A s s e s s m e n t  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   i f   t h e   p a t i e n t   h a s   a   r e a c t i o n   o n   f i l e   o r   n o t .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  a s s e s s i n g _ u s e r  |  2  |  A s s e s s i n g   U s e r  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   n a m e   o f   t h e   u s e r   w h o   m a d e   t h e   l a s t   r e a c t i o n \ r a s s e s s m e n t   f o r   t h i s   p a t i e n t .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  a s s e s s m e n t _ d a t e _ t i m e  |  3  |  A s s e s s m e n t   D a t e / t i m e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a t e / t i m e   o f   t h e   l a s t   r e a c t i o n   a s s e s s m e n t   f o r \ r t h i s   p a t i e n t .  {:/} |  D A T E - T I M E  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}