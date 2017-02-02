---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Pbm_Patient_Demographics-59_9 

<dl>
<dt>id</dt><dd> P b m _ P a t i e n t _ D e m o g r a p h i c s - 5 9 _ 9 </dd>
<dt>fmId</dt><dd> 5 9 . 9 </dd>
<dt>label</dt><dd> P b m   P a t i e n t   D e m o g r a p h i c s </dd>
<dt>location</dt><dd> ^ P S U D E M ( </dd>
<dt>description</dt><dd>  T h i s   f i l e   c a p t u r e s   t h e   d a t e ,   t i m e ,   a n d   P A T I E N T   D F N   w h e n   a n y   c h a n g e   o c c u r s   \ r i n   t h e   P A T I E N T   f i l e   ( # 2 )   o n   a n y   f i e l d   c a p t u r e d   i n   t h e   P B M   P a t i e n t   \ r D e m o g r a p h i c s   E x t r a c t .   D a t a   i n   t h i s   f i l e   w i l l   b e   p u r g e d   m o n t h l y   f o r   d a t a   \ r o l d e r   t h a n   7 5   d a y s .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e v e n t _ d a t e _ t i m e  |  . 0 1  |  E v e n t   D a t e / t i m e  | {::nomarkdown}  T h i s   f i e l d   r e c o r d s   t h e   d a t e   a n d   t i m e   w h e n   a n y   c h a n g e   o c c u r s   i n   t h e   \ r P A T I E N T   f i l e   ( # 2 )   o n   a n y   f i e l d   c a p t u r e d   i n   t h e   P B M   P a t i e n t   \ r D e m o g r a p h i c s   E x t r a c t .   T h e s e   c h a n g e s   a r e   c a p t u r e d   b y   t h e   D G   F i e l d   \ r M o n i t o r .   T h e   d a t a   i n   t h i s   f i e l d   i s   p u r g e d   m o n t h l y   f o r   a l l   d a t a   o l d e r   \ r t h a n   7 5   d a y s .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  p a t i e n t  |  . 0 2  |  P a t i e n t  | {::nomarkdown}  T h i s   f i e l d   r e c o r d s   t h e   P A T I E N T   D F N   w h e n   a n y   c h a n g e   o c c u r s   i n   t h e   P A T I E N T   \ r f i l e   ( # 2 )   o n   a n y   f i e l d   c a p t u r e d   i n   t h e   P B M   P a t i e n t   D e m o g r a p h i c s   E x t r a c t . \ r W h e n   t h e   m o n t h l y   p a t i e n t   d e m o g r a p h i c   e x t r a c t   r u n s ,   i t   w i l l   h a r v e s t   d a t a   \ r f r o m   t h e   P A T I E N T   f i l e   ( # 2 )   f o r   t h e   D F N s   s t o r e d   i n   t h i s   f i e l d   a n d   a l l   d a t a   \ r o l d e r   t h a n   7 5   d a y s   w i l l   b e   p u r g e d   f r o m   t h i s   f i l e .    {:/} |  P O I N T E R  |  |  | [Patient-2](Patient-2.md) | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}