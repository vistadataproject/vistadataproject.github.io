---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Display_Group-100_98 

<dl>
<dt>id</dt><dd> D i s p l a y _ G r o u p - 1 0 0 _ 9 8 </dd>
<dt>fmId</dt><dd> 1 0 0 . 9 8 </dd>
<dt>label</dt><dd> D i s p l a y   G r o u p </dd>
<dt>location</dt><dd> ^ O R D ( 1 0 0 . 9 8 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   a l l o w s   o r d e r s   t o   b e   c l u s t e r e d   i n   g r o u p s   o t h e r   t h a n   b y   p a c k a g e . \ r I t   i s   s i m i l a r   i n   s t r u c t u r e   t o   t h e   O P T I O N   F i l e   ( 1 9 ) .     T h i s   a l l o w s   d i s p l a y \ r g r o u p s   t o   b e   a r r a n g e d   i n   a   h i e r a r c h y .     T h e   m a i n   e n t r y   i n   t h i s   f i l e \ r s h o u l d   b e   ' A L L   S E R V I C E S ' .     O t h e r   e n t r i e s   s h o u l d   b e   l o g i c a l l y   s u b o r d i n a t e \ r t o   t h e   ' A L L   S E R V I C E S '   e n t r y .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   d i s p l a y   g r o u p   f o r   a   p a r t i c u l a r   k i n d   o f   o r d e r . \ r T h e   d i s p l a y   g r o u p   g e n e r a l l y   c o r r e s p o n d s   t o   a   h o s p i t a l   s e r v i c e   o r   p a r t \ r o f   a   s e r v i c e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  m e m b e r  |  1  |  M e m b e r  | {::nomarkdown}  T h i s   i s   a   l i s t   o f   s p e c i f i c   d i s p l a y   g r o u p s   t h a t   ` b e l o n g '   t o   t h e   d i s p l a y \ r g r o u p   l i s t e d   i n   t h e   N A M E   f i e l d .     ( T h i s   i s   s i m i l a r   t o   m e n u   i t e m s   i n   t h e \ r O P T I O N   F i l e . )  {:/} |  [ O B J E C T ]  |  |  | [Member-100_981](#Member-100_981)  | 
|  m i x e d _ n a m e  |  2  |  M i x e d   N a m e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   m i x e d   c a s e   n a m e   f o r   t h e   d i s p l a y   g r o u p .     T h e   n a m e   \ r s h o u l d   b e   a s   s h o r t   a s   p o s s i b l e   w i t h o u t   b e i n g   o b s c u r e .     T h i s   n a m e   i s   \ r p r i m a r i l y   i n t e n d e d   f o r   u s e   i n   t h e   w i n d o w s   d i s p l a y   o f   o r d e r s .  {:/} |  S T R I N G  |  |  |  | 
|  s h o r t _ n a m e  |  3  |  S h o r t   N a m e  | {::nomarkdown}  T h i s   i s   a n   a b b r e v i a t i o n   f o r   t h e   d i s p l a y   g r o u p   t o   b e   u s e d   i n   d i s p l a y s   a n d \ r r e p o r t s .  {:/} |  S T R I N G  |  |  |  | 
|  d e f a u l t _ d i a l o g  |  4  |  D e f a u l t   D i a l o g  | {::nomarkdown}  T h i s   i s   t h e   d i a l o g   t h a t   w i l l   b e   u s e d   a s   t h e   d e f a u l t   d e f i n i t i o n   w h e n \ r p l a c i n g   q u i c k   o r d e r s   a s s o c i a t e d   w i t h   t h i s   d i s p l a y   g r o u p .  {:/} |  P O I N T E R  |  |  | Order_Dialog-101_41 | 

## <a name="Member-100_981"></a>Member-100_981 

<dl>
<dt>id</dt><dd> M e m b e r - 1 0 0 _ 9 8 1 </dd>
<dt>label</dt><dd> M e m b e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s e q u e n c e  |  . 0 0 1  |  S e q u e n c e  | {::nomarkdown}  T h i s   i s   t h e   s e q u e n c e   o f   t h e   m e m b e r   i n   t h e   d i s p l a y   g r o u p   f o r   r e p o r t i n g \ r p u r p o s e s .  {:/} |  I E N  |  |  |  | 
|  m e m b e r  |  . 0 1  |  M e m b e r  | {::nomarkdown}  T h i s   i s   a   d i s p l a y   g r o u p   l i s t e d   i n   t h e   N A M E   f i e l d .   ( T h i s   i s   s i m i l a r   t o   a \ r m e n u   i t e m   i n   t h e   O P T I O N   F i l e . )  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Display_Group-100_98 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}