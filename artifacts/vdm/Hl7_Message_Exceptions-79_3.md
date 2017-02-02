---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Hl7_Message_Exceptions-79_3 

<dl>
<dt>id</dt><dd> H l 7 _ M e s s a g e _ E x c e p t i o n s - 7 9 _ 3 </dd>
<dt>fmId</dt><dd> 7 9 . 3 </dd>
<dt>label</dt><dd> H l 7   M e s s a g e   E x c e p t i o n s </dd>
<dt>location</dt><dd> ^ R A ( 7 9 . 3 , </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e x c e p t i o n _ d a t e _ t i m e  |  . 0 1  |  E x c e p t i o n   D a t e / t i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   o f   t h e   e x c e p t i o n   m e s s a g e  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s e n d i n g _ a p p l i c a t i o n  |  . 0 2  |  S e n d i n g   A p p l i c a t i o n  | {::nomarkdown}  T h e   S e n d i n g   A p p l i c a t i o n   w h i c h   g e n e r a t e d   t h e   e x c e p t i o n   m e s s a g e .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Hl7_Application_Parameter-771 | 
|  p a t i e n t  |  . 0 3  |  P a t i e n t  | {::nomarkdown}  T h i s   i s   t h e   p a t i e n t   n a m e   l i n k e d   t o   t h e   e x c e p t i o n   m e s s a g e .  {:/} |  P O I N T E R  |  |  | [Patient-2](Patient-2.md) | 
|  c a s e _ n u m b e r  |  . 0 4  |  C a s e   N u m b e r  | {::nomarkdown}  T h i s   i s   t h e   c a s e   n u m b e r   o f   t h e   e x a m   f o r   o u r   m e s s a g e   e x c e p t i o n .  {:/} |  N U M E R I C  |  |  |  | 
|  h l 7 _ m e s s a g e  |  . 0 5  |  H l 7   M e s s a g e  | {::nomarkdown}  T h i s   i s   t h e   H L 7   M e s s a g e   t h a t   w a s   r e j e c t e d  {:/} |  P O I N T E R  |  | REQUIRED | Hl7_Message_Administration-773 | 
|  u s e r  |  . 0 6  |  U s e r  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   r a d i o l o g y   u s e r   l i n k e d   t o   t h e   m e s s a g e   e x c e p t i o n  {:/} |  P O I N T E R  |  | INDEXED | [New_Person-200](New_Person-200.md) | 
|  e r r o r  |  1  |  E r r o r  | {::nomarkdown}  T h i s   i s   t h e   r e a s o n   t h a t   t h i s   m e s s a g e   w a s   r e j e c t e d .  {:/} |  S T R I N G  |  | REQUIRED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}