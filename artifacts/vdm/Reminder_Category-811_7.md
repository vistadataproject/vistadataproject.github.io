---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Reminder_Category-811_7 

<dl>
<dt>id</dt><dd> R e m i n d e r _ C a t e g o r y - 8 1 1 _ 7 </dd>
<dt>fmId</dt><dd> 8 1 1 . 7 </dd>
<dt>label</dt><dd> R e m i n d e r   C a t e g o r y </dd>
<dt>location</dt><dd> ^ P X R M D ( 8 1 1 . 7 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   R e m i n d e r   C a t e g o r i e s .   R e m i n d e r   C a t e g o r i e s   a r e \ r c r e a t e d   a t   e a c h   s i t e   a n d   a r e   n o t   r e l e a s e d   w i t h   t h e   r e m i n d e r   p a c k a g e . \ r   \ r A   R e m i n d e r   C a t e g o r y   i s   a   l i s t   o f   r e m i n d e r s   ( o r   o t h e r   r e m i n d e r \ r c a t e g o r i e s )   a n d   i s   u s e d   t o   g r o u p   r e m i n d e r s   f o r   d i s p l a y   i n   t h e   C P R S \ r G U I .   R e m i n d e r   c a t e g o r i e s   a r e   a l l o c a t e d   t o   i n d i v i d u a l   u s e r s , \ r l o c a t i o n s ,   s e r v i c e   o r   s y s t e m   u s i n g   t h e   o p t i o n   P X R M   C P R S   L O O K U P \ r C A T E G O R I E S . \ r \ r R e m i n d e r   C a t e g o r i e s   c a n   a l s o   b e   u s e d   i n   c o n j u n c t i o n   w i t h   R e m i n d e r \ r D u e   S u m m a r y   R e p o r t s .   T h e   u s e r   i s   g i v e n   t h e   o p t i o n   t o   s e l e c t   a \ r R e m i n d e r   C a t e g o r y   o r   i n p u t   a   l i s t   o f   i n d i v i d u a l   r e m i n d e r s .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   R e m i n d e r   C a t e g o r y .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  d e s c r i p t i o n  |  1  |  D e s c r i p t i o n  | {::nomarkdown}  T h i s   i s   t h e   d e s c r i p t i o n   o f   t h e   R e m i n d e r   C a t e g o r y .  {:/} |  S T R I N G  |  |  |  | 
|  i n d i v i d u a l _ r e m i n d e r s  |  2  |  I n d i v i d u a l   R e m i n d e r s  | {::nomarkdown}  T h i s   i s   t h e   l i s t   o f   r e m i n d e r s   t h a t   a r e   i n   t h i s   c a t e g o r y .  {:/} |  [ O B J E C T ]  |  |  | [Individual_Reminders-811_72](#Individual_Reminders-811_72)  | 
|  s u b c a t e g o r y  |  1 0  |  S u b - c a t e g o r y  | {::nomarkdown}  T h i s   m u l t i p l e   a l l o w s   y o u   t o   i n c l u d e   a l r e a d y   e x i s t i n g   c a t e g o r i e s   a s   p a r t \ r o f   a   n e w   c a t e g o r y .   S u b - c a t e g o r i e s   a r e   a l w a y s   l i s t e d   a f t e r   i n d i v i d u a l \ r r e m i n d e r s .  {:/} |  [ O B J E C T ]  |  |  | [Subcategory-811_701](#Subcategory-811_701)  | 

## <a name="Individual_Reminders-811_72"></a>Individual_Reminders-811_72 

<dl>
<dt>id</dt><dd> I n d i v i d u a l _ R e m i n d e r s - 8 1 1 _ 7 2 </dd>
<dt>label</dt><dd> I n d i v i d u a l   R e m i n d e r s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  i n d i v i d u a l _ r e m i n d e r s  |  . 0 1  |  I n d i v i d u a l   R e m i n d e r s  | {::nomarkdown}  T h i s   i s   a   r e m i n d e r   d e f i n i t i o n .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Reminder_Definition-811_9 | 
|  d i s p l a y _ o r d e r  |  . 0 2  |  D i s p l a y   O r d e r  | {::nomarkdown}  T h i s   i s   t h e   o r d e r   i n   w h i c h   t o   d i s p l a y   t h i s   r e m i n d e r   d e f i n i t i o n   w h e n   t h e   \ r l i s t   o f   r e m i n d e r s   i n   t h i s   c a t e g o r y   i s   d i s p l a y e d .  {:/} |  N U M E R I C  |  | REQUIRED |  | 

## <a name="Subcategory-811_701"></a>Subcategory-811_701 

<dl>
<dt>id</dt><dd> S u b c a t e g o r y - 8 1 1 _ 7 0 1 </dd>
<dt>label</dt><dd> S u b - c a t e g o r y </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s u b c a t e g o r y  |  . 0 1  |  S u b - c a t e g o r y  | {::nomarkdown}  T h i s   i s   a n   e x i s t i n g   c a t e g o r y   t h a t   i s   t o   b e   i n c l u d e d   a s   p a r t   o f   a   n e w \ r c a t e g o r y .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Reminder_Category-811_7 | 
|  d i s p l a y _ o r d e r  |  . 0 2  |  D i s p l a y   O r d e r  | {::nomarkdown}  T h i s   i s   t h e   d i s p l a y   o r d e r   f o r   t h e   s u b - c a t e g o r i e s .   S u b - c a t e g o r i e s   a r e \ r d i s p l a y e d   a f t e r   i n d i v i d u a l   r e m i n d e r s .  {:/} |  N U M E R I C  |  | REQUIRED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}