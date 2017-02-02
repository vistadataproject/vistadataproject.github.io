---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Facility_Treating_Specialty-45_7 

<dl>
<dt>id</dt><dd> F a c i l i t y _ T r e a t i n g _ S p e c i a l t y - 4 5 _ 7 </dd>
<dt>fmId</dt><dd> 4 5 . 7 </dd>
<dt>label</dt><dd> F a c i l i t y   T r e a t i n g   S p e c i a l t y </dd>
<dt>location</dt><dd> ^ D I C ( 4 5 . 7 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   i s   u s e d   t o   m a i n t a i n   t h e   v a r i o u s   t e a m s   o f   s p e c i a l t i e s   t h a t   a r e   u s e d   t o   t r e a t   a   p a t i e n t   d u r i n g   h i s   e p i s o d e s   o f   c a r e . \ r A   c h a n g e   i n   t h e   b e d s e c t i o n   a s s o c i a t e d   w i t h   t h e   t r e a t i n g   s p e c i a l t i e s   c a u s e s \ r t h e   g e n e r a t i o n   o f   c h a n g e s   i n   b e d s e c t i o n   f o r   P T F   p u r p o s e s . \ r t h e   g e n e r a t i o n   o f   c h a n g e s   i n   b e d s e c t i o n   f o r   P T F   p u r p o s e s .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  C o n t a i n s   t h e   n a m e   o f   t h e   f a c i l i t y   t r e a t i n g   s p e c i a l t y .     T y p e s   o f \ r t r e a t i n g   s p e c i a l t i e s   m a y   v a r y   b e t w e e n   f a c i l i t i e s .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  s p e c i a l t y  |  1  |  S p e c i a l t y  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   t r e a t i n g   s p e c i a l t y   n a m e   a s   e n t e r e d   b y \ r f a c i l i t y   o r   d i s t r i b u t e d   w i t h   s o f t w a r e .     P o i n t e r   t o     S p e c i a l t y   F i l e  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Specialty-42_4 | 
|  s e r v i c e  |  2  |  S e r v i c e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   a s s o c i a t e d   S e r v i c e   o f   t h e   t r e a t i n g   s p e c i a l t y .  {:/} |  P O I N T E R  |  | INDEXED | Service_section-49 | 
|  p r o v i d e r s  |  1 0  |  P r o v i d e r s  | {::nomarkdown}  P r i m a r y   c a r e   p h y s i c i a n s   a s s o c i a t e d   w i t h   t r e a t i n g   s p e c i a l t y .  {:/} |  [ P O I N T E R ]  |  |  |  { i d : N e w _ P e r s o n - 2 0 0 }  | 
|  a b b r e v i a t i o n  |  9 9  |  A b b r e v i a t i o n  | {::nomarkdown}  F o r m e r l y   h o n e y w e l l   c o d e   m a y   n o w   a s s u m e   o t h e r   u s e s . \ r E n t e r   a n   a b b r e v i a t i o n   ( 1 - 5   c h a r a c t e r s )   t o   b e   u s e d   w h e n   \ r P a t i e n t s   T r e a t i n g   S p e c i a l t y   i s   t o   b e   d i s p l a y e d   o n   t h e   G & L . \ r I f   t h e r e   i s   n o t h i n g   e n t e r e d   h e r e   t h e   f i r s t   f i v e   c h a r a c t e r s   \ r o f   t h e   n a m e   f o r   t h i s   f a c i l i t y   t r e a t i n g   s p e c i a l t y   w i l l   a p p e a r   \ r o n   t h e   G & L .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  e f f e c t i v e _ d a t e  |  1 0 0  |  E f f e c t i v e   D a t e  |  |  [ O B J E C T ]  |  |  | [Effective_Date-45_702](#Effective_Date-45_702)  | 

## <a name="Effective_Date-45_702"></a>Effective_Date-45_702 

<dl>
<dt>id</dt><dd> E f f e c t i v e _ D a t e - 4 5 _ 7 0 2 </dd>
<dt>label</dt><dd> E f f e c t i v e   D a t e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e f f e c t i v e _ d a t e  |  . 0 1  |  E f f e c t i v e   D a t e  | {::nomarkdown}  T h i s   m u l t i p l e   h o l d s   t h e   e f f e c t i v e   d a t e ( s )   f o r   t h e   F a c i l i t y   T r e a t i n g \ r S p e c i a l t i e s \ r    {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  a c t i v e  |  . 0 2  |  A c t i v e ?  | {::nomarkdown}  T h i s   f i e l d   w i l l   b e   a n   a c t i v e / i n a c t i v e   f l a g   f o r   t h e   f a c i l i t y   t r e a t i n g \ r s p e c i a l t y .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}