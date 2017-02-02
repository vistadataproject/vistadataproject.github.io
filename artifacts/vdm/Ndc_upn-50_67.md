---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Ndc_upn-50_67 

<dl>
<dt>id</dt><dd> N d c _ u p n - 5 0 _ 6 7 </dd>
<dt>fmId</dt><dd> 5 0 . 6 7 </dd>
<dt>label</dt><dd> N d c / u p n </dd>
<dt>location</dt><dd> ^ P S N D F ( 5 0 . 6 7 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   a   l i s t   o f   N a t i o n a l   D r u g   C o d e s   ( N D C s )   a n d   U n i v e r s a l \ r P r o d u c t   N u m b e r s   ( U P N s ) .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s e q u e n c e _ n u m b e r  |  . 0 1  |  S e q u e n c e   N u m b e r  |  |  N U M E R I C  |  | REQUIRED |  | 
|  n d c  |  1  |  N d c  | {::nomarkdown}  T h i s   i s   t h e   1 2   c h a r a c t e r   N D C   ( N a t i o n a l   D r u g   C o d e )   f o r   t h i s   i t e m .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  u p n  |  2  |  U p n  | {::nomarkdown}  T h i s   i s   t h e   U P N   ( U n i v e r s a l   P r o d u c t   N u m b e r )   f o r   t h i s   i t e m .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  m a n u f a c t u r e r  |  3  |  M a n u f a c t u r e r  | {::nomarkdown}  T h i s   i s   t h e   m a n u f a c t u r e r   o f   t h i s   i t e m .  {:/} |  P O I N T E R  |  |  | Drug_Manufacturer-55_95 | 
|  t r a d e _ n a m e  |  4  |  T r a d e   N a m e  | {::nomarkdown}  T h i s   i s   t h e   t r a d e   n a m e   o f   t h i s   i t e m .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  v a _ p r o d u c t _ n a m e  |  5  |  V A   P r o d u c t   N a m e  | {::nomarkdown}  T h i s   i s   t h e   V A   P r o d u c t   a s s o c i a t e d   w i t h   t h i s   i t e m .  {:/} |  P O I N T E R  |  |  | [VA_Product-50_68](VA_Product-50_68.md) | 
|  r o u t e _ o f _ a d m i n i s t r a t i o n  |  6  |  R o u t e   O f   A d m i n i s t r a t i o n  |  |  [ S T R I N G ]  |  |  |  | 
|  i n a c t i v a t i o n _ d a t e  |  7  |  I n a c t i v a t i o n   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   w h e n   t h i s   i t e m   w a s   m a d e   i n a c t i v e .  {:/} |  D A T E - T I M E  |  |  |  | 
|  p a c k a g e _ s i z e  |  8  |  P a c k a g e   S i z e  | {::nomarkdown}  T h i s   i s   t h e   p a c k a g e   s i z e .  {:/} |  P O I N T E R  |  |  | Package_Size-50_609 | 
|  p a c k a g e _ t y p e  |  9  |  P a c k a g e   T y p e  | {::nomarkdown}  T h i s   i s   t h e   p a c k a g e   t y p e .  {:/} |  P O I N T E R  |  |  | Package_Type-50_608 | 
|  o t x _ r x _ i n d i c a t o r  |  1 0  |  O t x / r x   I n d i c a t o r  |  |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>O</dt><dd>Over the counter</dd><dt>R</dt><dd>Prescription</dd></dl>{:/} | 
|  p r e v i o u s _ n d c  |  1 1  |  P r e v i o u s   N d c  |  |  [ S T R I N G ]  |  |  |  | 
|  p r e v i o u s _ u p n  |  1 2  |  P r e v i o u s   U p n  |  |  [ S T R I N G ]  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}