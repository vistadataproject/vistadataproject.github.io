---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; TIU_Personal_Document_Type_List-8925_98 

<dl>
<dt>id</dt><dd> T I U _ P e r s o n a l _ D o c u m e n t _ T y p e _ L i s t - 8 9 2 5 _ 9 8 </dd>
<dt>fmId</dt><dd> 8 9 2 5 . 9 8 </dd>
<dt>label</dt><dd> T I U   P e r s o n a l   D o c u m e n t   T y p e   L i s t </dd>
<dt>location</dt><dd> ^ T I U ( 8 9 2 5 . 9 8 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   i s   u s e d   t o   s t o r e   \  p i c k - l i s t s \    o f   d o c u m e n t s   ( b y   c l a s s ) ,   f o r \ r s e l e c t i o n   b y   t h e   u s e r .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  p e r s o n  |  . 0 1  |  P e r s o n  | {::nomarkdown}  T h i s   i s   t h e   p e r s o n   w h o s e   p r e f e r e n c e   i s   b e i n g   i d e n t i f i e d .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [New_Person-200](New_Person-200.md) | 
|  p a r e n t _ d o c u m e n t _ c l a s s  |  . 0 2  |  P a r e n t   D o c u m e n t   C l a s s  | {::nomarkdown}  T h i s   i s   t h e   g r o u p   ( i . e . ,   e i t h e r   D o c u m e n t   C l a s s   o r   C l a s s )   t o   w h i c h   t h e \ r p r e f e r r e d   d o c u m e n t   l i s t   b e l o n g s .     i . e . ,   e n t e r   t h e   c l a s s   P r o g r e s s   N o t e s \ r t o   i n d i c a t e   t h a t   t h e   c o r r e s p o n d i n g   l i s t   w i l l   a p p l y   t o   P r o g r e s s   N o t e s .  {:/} |  P O I N T E R  |  |  | TIU_Document_Definition-8925_1 | 
|  d e f a u l t _ t y p e  |  . 0 3  |  D e f a u l t   T y p e  | {::nomarkdown}  T h i s   d e t e r m i n e s   w h a t   T I T L E   w i l l   b e   o f f e r e d   b y   d e f a u l t   w h e n   s e l e c t i n g \ r f r o m   a   g i v e n   p a r e n t   c l a s s   ( e . g . ,   w h e n   e n t e r i n g   a   P R O G R E S S   N O T E ,   y o u \ r m a y   w a n t   t h e   D E F A U L T   T I T L E   t o   b e   D I A B E T E S   E D U C A T I O N ,   e t c . ) .  {:/} |  P O I N T E R  |  |  | TIU_Document_Definition-8925_1 | 
|  p e r s o n a l _ d o c u m e n t _ l i s t  |  1 0  |  P e r s o n a l   D o c u m e n t   L i s t  | {::nomarkdown}  T h i s   M u l t i p l e   i s   u s e d   f o r   s t o r i n g   p e r s o n a l   l i s t s   o f   d o c u m e n t s   f o r   t y p e \ r s e l e c t i o n   d u r i n g   e n t r y / e d i t i n g .  {:/} |  [ O B J E C T ]  |  |  | [Personal_Document_List-8925_9801](#Personal_Document_List-8925_9801)  | 
|  t i m e s t a m p  |  9 9  |  T i m e s t a m p  | {::nomarkdown}  T h i s   i s   t h e   t i m e s t a m p   o n   t h e   r e c o r d   i n   $ H   f o r m a t   w h i c h   i s   c o m p a r e d   w i t h \ r t h a t   o n   t h e   c o m p i l e d   m e n u   i n   ^ X U T L ( \  X Q O R M \  , \  D A ; T I U ( 8 9 2 5 . 9 8 , \  , 9 9 )   t o \ r d e t e r m i n e   w h e t h e r   r e c o m p i l a t i o n   i s   n e c e s s a r y .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Personal_Document_List-8925_9801"></a>Personal_Document_List-8925_9801 

<dl>
<dt>id</dt><dd> P e r s o n a l _ D o c u m e n t _ L i s t - 8 9 2 5 _ 9 8 0 1 </dd>
<dt>label</dt><dd> P e r s o n a l   D o c u m e n t   L i s t </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  t i t l e  |  . 0 1  |  T i t l e  | {::nomarkdown}  T h i s   i s   t h e   d o c u m e n t   t o   b e   i n c l u d e d   i n   y o u r   p i c k   l i s t   o f   d o c u m e n t s   f o r \ r t h e   c u r r e n t   d o c u m e n t   c l a s s .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | TIU_Document_Definition-8925_1 | 
|  s e q u e n c e  |  . 0 2  |  S e q u e n c e  | {::nomarkdown}  T h i s   i s   t h e   s e q u e n c e   i n   w h i c h   y o u   w i s h   t h e   d o c u m e n t   t o   a p p e a r   i n   y o u r \ r l i s t .  {:/} |  N U M E R I C  |  |  |  | 
|  d i s p l a y _ n a m e  |  . 0 3  |  D i s p l a y   N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   d o c u m e n t   t o   b e   d i s p l a y e d   i n   m e n u s .  {:/} |  S T R I N G  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}