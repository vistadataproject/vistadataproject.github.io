---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Patient_ihs-9000001 

<dl>
<dt>id</dt><dd> P a t i e n t _ i h s - 9 0 0 0 0 0 1 </dd>
<dt>fmId</dt><dd> 9 0 0 0 0 0 1 </dd>
<dt>label</dt><dd> P a t i e n t / i h s </dd>
<dt>location</dt><dd> ^ A U P N P A T ( </dd>
<dt>description</dt><dd>  T h i s   f i l e   i s   I H S ' s   p r i m a r y   p a t i e n t   d a t a   f i l e .     T h e   N A M E   ( . 0 1 )   f i e l d   o f   t h i s   \ r f i l e   i s   a   p o i n t e r   t o   t h e   V A ' s   p a t i e n t   f i l e   ( # 2 ) .     F i e l d s   i n   \ r c o m m o n   b e t w e e n   t h e   t w o   d i c t i o n a r i e s   a c t u a l l y   e x i s t   o n l y   i n   t h e   V A   p a t i e n t   \ r f i l e   a n d   a r e   r e f e r e n c e d   b y   t h e   I H S   p a t i e n t   f i l e   a s   c o m p u t e d   f i e l d s .     A l l   \ r o t h e r   f i l e s   c o n t a i n i n g   p a t i e n t   d a t a   h a v e   b a c k w a r d   p o i n t e r s   l i n k i n g   t h e m   t o   \ r t h i s   f i l e .     T h e   l i n k a g e   i s   b y   p a t i e n t   n a m e   a n d   t h e   i n t e r n a l   F i l e M a n   g e n e r - \ r a t e d   n u m b e r   o f   t h e   a n c i l l a r y   f i l e   i s   t h e   s a m e   n u m b e r   u s e d   i n   t h i s   f i l e . \ r       \ r A l l   a p p l i c a t i o n s   d e v e l o p e d   f o r   t h e   R P M S   w h i c h   r e q u i r e   p a t i e n t   d a t a   w i l l \ r p o i n t   t o   t h i s   f i l e .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   f i e l d   p o i n t s   t o   t h e   P a t i e n t   f i l e   ( # 2 )   a n d   h a s   t h e   s a m e   i n t e r n a l \ r n u m b e r   a s   t h a t   f i l e .     T h u s ,   t h e   p a t i e n t ' s   n a m e   i s   t h e   P a t i e n t   f i l e   ( # 2 ) \ r n a m e .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
|  l o c a t i o n _ o f _ h o m e  |  1 2 0 1  |  L o c a t i o n   O f   H o m e  | {::nomarkdown}  T h i s   i s   t h e   d i r e c t i o n s   t o   g e t   t o   t h e   p a t i e n t s   h o m e .  {:/} |  S T R I N G  |  |  |  | 
|  h e a l t h _ r e c o r d _ n o  |  4 1 0 1  |  H e a l t h   R e c o r d   N o .  | {::nomarkdown}  T h i s   m u l t i p l e   c o n t a i n s   t h e   d i f f e r e n t   h e a l t h   r e c o r d   i d e n t i f i e r s   b y   f a c i l i t y . \ r I H S   u s e s   a   6   c h a r a c t e r   i d e n t i f i e r . \ r T h e   V A   u s e s   t h e   s o c i a l   s e c u r i t y   n u m b e r   w h i c h   m a y   b e   u p   t o   1 0   \ r c h a r a c t e r s .      {:/} |  [ O B J E C T ]  |  |  | [Health_Record_No-9000001_41](#Health_Record_No-9000001_41)  | 

## <a name="Health_Record_No-9000001_41"></a>Health_Record_No-9000001_41 

<dl>
<dt>id</dt><dd> H e a l t h _ R e c o r d _ N o - 9 0 0 0 0 0 1 _ 4 1 </dd>
<dt>label</dt><dd> H e a l t h   R e c o r d   N o . </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  h e a l t h _ r e c o r d _ f a c  |  . 0 1  |  H e a l t h   R e c o r d   F a c  | {::nomarkdown}  T h i s   f i e l d   i s   a   p o i n t e r   t o   t h e   L O C A T I O N   f i l e .     T h e   i n t e r n a l   p o i n t e r \ r i s   f o r c e d   i n t o   t h e   t h i r d   s u b s c r i p t   f o r   t h e   9 0 0 0 0 0 1 . 4 1   s u b f i l e .     T h i s \ r a l l o w s   e a s y   l o o k u p   b y   h e a l t h   r e c o r d   n u m b e r   f o r   t h e   l o g g e d   o n \ r l o c a t i o n   ( f a c i l i t y ) . \ r   \ r T h e   c o m p l e t e   s u b s c r i p t   f o r   9 0 0 0 0 0 1 . 4 1   w i l l   b e   ( D F N , 4 1 , f a c i l i t y   p o i n t e r , 0 ) .  {:/} |  P O I N T E R  |  | REQUIRED | Location-9999999_06 | 
|  h e a l t h _ r e c o r d _ n o  |  . 0 2  |  H e a l t h   R e c o r d   N o .  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   r e p r e s e n t   t h e   h e a l t h   r e c o r d   n u m b e r   r e l a t e d   t o   a \ r f a c i l i t y . \ r   \ r I H S   u s e s   a   6   c h a r a c t e r   w h o l e   n u m b e r . \ r   \ r V A   u s e s   t h e   p a t i e n t   S S N   f r o m   t h e   P a t i e n t   F i l e   ( 2 ) .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  d a t e _ i n a c t i v a t e d _ d e l e t e d  |  . 0 3  |  D a t e   I n a c t i v a t e d / d e l e t e d  | {::nomarkdown}  T h i s   i s   d a t e   t h a t   t h e   p a t i e n t s   e n t r y   w a s   i n a c t i v a t e d .  {:/} |  D A T E - T I M E  |  |  |  | 
|  r e c o r d _ s t a t u s  |  . 0 5  |  R e c o r d   S t a t u s  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   b y   t h e   I H S   M u l t i - F a c i l i t y   I n t e g r a t i o n   ( M F I )   p a c k a g e \ r t o   d e t e r m i n e   w h e t h e r   t o   s t o p   i n t e g r a t i n g   d a t a   a t   a   f a c i l i t y   f o r   a   \ r p a r t i c u l a r   p a t i e n t   a n d   l o c a t i o n   f a c i l i t y .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>D</dt><dd>DELETED</dd><dt>I</dt><dd>INACTIVATED</dd><dt>M</dt><dd>MERGED</dd></dl>{:/} | 
|  s t o p _ i n t e g r a t i o n  |  . 0 6  |  S t o p   I n t e g r a t i o n  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   b y   t h e   M u l t - F a c i l i t y   I n t e g r a t i o n   ( M F I )   p a c k a g e , \ r c r e a t e d   b y   I H S ,   t o   i n d i c a t e   t h i s   p a t i e n t s   d a t a   s h o u l d   n o   l o n g e r   b e \ r i n t e g r a t e d   b y   M F I .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}