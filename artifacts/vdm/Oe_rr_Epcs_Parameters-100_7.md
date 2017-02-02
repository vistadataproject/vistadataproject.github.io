---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_Epcs_Parameters-100_7 

<dl>
<dt>id</dt><dd> O e _ r r _ E p c s _ P a r a m e t e r s - 1 0 0 _ 7 </dd>
<dt>fmId</dt><dd> 1 0 0 . 7 </dd>
<dt>label</dt><dd> O e / r r   E p c s   P a r a m e t e r s </dd>
<dt>location</dt><dd> ^ O R D ( 1 0 0 . 7 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   s t o r e s   t h e   e l e c t r o n i c   P r e s c r i b i n g   o f   C o n t r o l l e d   S u b s t a n c e s   \ r ( e P C S )   p a r a m e t e r s   u s e d   b y   C P R S .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s i t e _ n a m e  |  . 0 1  |  S i t e   N a m e  | {::nomarkdown}  T h e   s i t e   f o r   w h i c h   t h e   p a r a m e t e r   v a l u e s   a p p l y .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Institution-4](Institution-4.md) | 
|  e n a b l e _ e p c s  |  . 0 2  |  E n a b l e   E p c s ?  | {::nomarkdown}  S t o r e s   w h e t h e r   e P C S   i s   e n a b l e d   f o r   t h e   s e l e c t e d   s i t e   o r   n o t .  {:/} |  B O O L E A N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  e n a b l e d _ u s e r s  |  1  |  E n a b l e d   U s e r s  | {::nomarkdown}  U s e r s   f o r   w h i c h   e P C S   i s   e n a b l e d .  {:/} |  [ P O I N T E R ]  |  |  |  { i d : N e w _ P e r s o n - 2 0 0 }  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}