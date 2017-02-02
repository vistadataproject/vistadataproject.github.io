---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Lab_Section_Print-69_2 

<dl>
<dt>id</dt><dd> L a b _ S e c t i o n _ P r i n t - 6 9 _ 2 </dd>
<dt>fmId</dt><dd> 6 9 . 2 </dd>
<dt>label</dt><dd> L a b   S e c t i o n   P r i n t </dd>
<dt>location</dt><dd> ^ L R O ( 6 9 . 2 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   u s e d   t o   h o l d   p r i n t   h e a d e r s   f o r   a n a t o m i c   p a t h   r e p o r t s   a n d   a s   a   t e m p o r a r y   h o l d i n g   f i l e   f o r   p a t h   c u m u l a t i v e ,   i n c o m p l e t e   a n d   c o m p l e t e   r e p o r t s . \ r   I t   m a y   a l s o   b e   u s e d   f o r   a n y   a c c e s s i o n   a r e a   f i l e   s i n c e   t h e   N A M E   ( . 0 1 )   f i e l d   i s   a   p o i n t e r   t o   t h e   a c c e s s i o n   a r e a   f i l e   ( 6 8 ) .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h e   n a m e   o f   t h e   L a b   s e c t i o n   p r i n t   p o i n t e d   t o   t h e   A c c e s s i o n   f i l e .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Accession-68 | 
|  a b b r e v i a t i o n  |  . 0 2  |  A b b r e v i a t i o n  | {::nomarkdown}  A b b r e v i a t i o n   t o   t h e   n a m e   o f   t h e   L a b   s e c t i o n   p r i n t  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  r e p o r t _ h e a d e r _ 1  |  . 0 3  |  R e p o r t   H e a d e r   1  | {::nomarkdown}  F i r s t   h e a d e r   i n   p a t h   r e p o r t   a f t e r   P o s t   o p e r a t i v e   D i a g n o s i s .     T h e   r o u t i n e   u s e d   i s   L R S P R P T   ( C Y / E M / S P   p a t i e n t   r e p o r t ) .  {:/} |  S T R I N G  |  |  |  | 
|  r e p o r t _ h e a d e r _ 2  |  . 0 4  |  R e p o r t   H e a d e r   2  | {::nomarkdown}  S e c o n d   h e a d e r   i n   p a t h   r e p o r t   a f t e r   P o s t   o p e r a t i v e   D i a g n o s i s .     T h e   r o u t i n e   u s e d   i s   L R S P R P T   ( C Y / E M / S P   p a t i e n t   r e p o r t ) .  {:/} |  S T R I N G  |  |  |  | 
|  p r i n t _ s n o m e d _ i c d _ c o d e s  |  . 0 5  |  P r i n t   S n o m e d / i c d   C o d e s  | {::nomarkdown}  I f   l o w e r   c a s e   i s   t o   b e   p r i n t e d   f o r   S N O M E D   a n d   I C D 9 C M   c o d e s   e n t e r   1   o r   L O W E R   C A S E .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>UPPER CASE</dd><dt>1</dt><dd>LOWER CASE</dd></dl>{:/} | 
|  g r o s s _ d e s c r i p t i o n _ s p a c i n g  |  . 0 6  |  G r o s s   D e s c r i p t i o n   S p a c i n g  | {::nomarkdown}  I f   d o u b l e   s p a c i n g ,   g r o s s   d e s c r i p t i o n s   f o r   a n a t o m i c   p a t h   m i c r o s c o p i c   e x a m i n a t i o n s   w i l l   b e   d o u b l e   s p a c e d ,   o t h e r w i s e   s i n g l e   s p a c i n g   w i l l   b e   u s e d .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>D</dt><dd>DOUBLE</dd><dt>S</dt><dd>SINGLE</dd></dl>{:/} | 
|  l i n e s _ i n _ a _ l a b e l  |  . 0 7  |  L i n e s   I n   A   L a b e l  | {::nomarkdown}  T h e   n u m b e r   o f   l i n e s   f r o m   t h e   t o p   o f   o n e   l a b e l   t o   t h e   t o p   o f   t h e \ r   n e x t   l a b e l .     T h i s   i s   u s e d   a s   t h e   d e f a u l t   v a l u e   w h e n   p r i n t i n g \ r   v a r i o u s   l a b e l s .  {:/} |  N U M E R I C  |  |  |  | 
|  a c c e s s i o n _ p r e f i x  |  . 0 8  |  A c c e s s i o n   P r e f i x  | {::nomarkdown}  I f   a c c e s s i o n   p r e f i x   i s   e n t e r e d   t h e   p a t h   r e p o r t   w i l l \ r   h a v e   t h e   a c c e s s i o n   n u m b e r   p r i n t e d   a s   f o l l o w s : \ r   P R E F I X   y r   a c c e s s i o n # \ r   E x .   I f   S   e n t e r e d   f o r   t h e   p r e f i x ,   a c c e s s i o n   #   i s   1 2 3   a n d   y e a r   8 7 \ r   t h e   p a t h   r e p o r t   w i l l   p r i n t   t h e   a c c e s s i o n   a s   S 8 7   1 2 3 \ r   I f   y o u   w a n t   a   s p a c e   a f t e r   S   e n t e r   a   s p a c e   a f t e r   t h e   ' S ' . \ r   T o   e l i m i n a t e   t h e   p r e f i x   a n d   d a t e   d e l e t e   t h e   e n t r y .   ( e x .   S / / @   ) .  {:/} |  S T R I N G  |  |  |  | 
|  p r i n t _ s f 5 1 5 _ l i n e s  |  . 0 9  |  P r i n t   S f - 5 1 5   L i n e s  | {::nomarkdown}  Y E S -   P r i n t s   a l l   d a s h e d   l i n e s   i n   t h e   S F - 5 1 5   f o r m \ r   N O -   D o e s   n o t   p r i n t   a l l   l i n e s  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  a s k _ t c _ c o d e s  |  . 1  |  A s k   T c   C o d e s  | {::nomarkdown}  A l l o w s   c o d i n g   c a s e s   f o r   t i s s u e   c o m m i t t e e  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
|  r o u t i n e _ p r o c e d u r e _ 1  |  . 1 1  |  R o u t i n e   P r o c e d u r e   1  | {::nomarkdown}  N u m b e r   o f   t i m e s   p r o c e d u r e   i s   r o u t i n e l y   p e r f o r m e d . \ r   F o r   E M   t h e   n u m b e r   o f   t h i c k   s e c t i o n s   m a d e   p e r   b l o c k .  {:/} |  N U M E R I C  |  |  |  | 
|  r o u t i n e _ p r o c e d u r e _ 2  |  . 1 2  |  R o u t i n e   P r o c e d u r e   2  | {::nomarkdown}  N u m b e r   o f   t i m e s   r o u t i n e   p r o c e d u r e   i s   p e r f o r m e d . \ r   F o r   E M   t h e   n u m b e r   o f   g r i d s   r o u t i n e l y   m a d e   p e r   b l o c k .  {:/} |  N U M E R I C  |  |  |  | 
|  r e p o r t _ h e a d e r _ 3  |  . 1 3  |  R e p o r t   H e a d e r   3  | {::nomarkdown}  T h i r d   h e a d e r   i n   p a t h   r e p o r t   a f t e r   P o s t   o p e r a t i v e   D i a g n o s i s .     T h e   \ r r o u t i n e   u s e d   i s   L R S P R P T   C Y / E M / S P   p a t i e n t   r e p o r t ) . \ r   F o r   s u r g i c a l   p a t h o l o g y   t h i s   h e a d e r   w i l l   b e   t h e   f r o z e n   s e c t i o n   r e p o r t .  {:/} |  S T R I N G  |  |  |  | 
|  r e p o r t _ h e a d e r _ 4  |  . 1 4  |  R e p o r t   H e a d e r   4  | {::nomarkdown}  F o u r t h   h e a d e r   i n   p a t h   r e p o r t   a f t e r   p o s t   o p   d x . \ r   T h e   r o u t i n e   u s e d   i s   L R S P R P T . \ r   F o r   s u r g i c a l   p a t h o l o g y   t h i s   h e a d e r   w i l l   b e   t h e   d i a g n o s i s   f i e l d .  {:/} |  S T R I N G  |  |  |  | 
|  n e w _ p g _ f o r _ s u p p l e m e n t a r y _ r p t  |  . 2 1  |  N e w   P g   F o r   S u p p l e m e n t a r y   R p t  | {::nomarkdown}  I f   a   p a g e   f e e d   i s   w a n t e d   b e f o r e   p r i n t i n g   t h e   s u p p l e m e n t a r y   r e p o r t   a   \ r ' Y E S '   i s   e n t e r e d .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
|  s l i d e _ l a b e l  |  . 3  |  S l i d e   L a b e l  | {::nomarkdown}  E n t e r   t h e   n a m e   o f   t h e   t y p e   o f   p r e p a r a t i o n   o r   t e c h n i q u e   u s e d   f o r   s p e c i m e n s .  {:/} |  [ O B J E C T ]  |  |  | [Slide_Label-69_22](#Slide_Label-69_22)  | 
|  i n c o m p l e t e _ r e p o r t s _ q u e u e  |  1  |  I n c o m p l e t e   R e p o r t s   Q u e u e  | {::nomarkdown}  H e r e   a r e   s t o r e d   t h e   t e m p o r a r y   l i s t   o f   s p e c i m e n s   l o g g e d - i n   f o r   p r i n t i n g   a t   t i m e   o f   m i c r o s c o p i c   e x a m .     T h e   r e p o r t   w i l l   c o n t a i n   a l l   p a s t   s p e c i m e n s   w i t h   t h e i r   S N O M E D   c o d i n g   i n   f r e e   t e x t   f o r m   f o r   S u r g   p a t h ,   c y t o p a t h ,   a n d   E M . \ r   I f   t h e r e   a r e   g r o s s   d e s c r i p t i o n s   t h e y   w i l l   b e   p a r t   o f   t h e   p r i n t - o u t .  {:/} |  [ O B J E C T ]  |  |  | [Incomplete_Reports_Queue-69_21](#Incomplete_Reports_Queue-69_21)  | 
|  c o m p l e t e d _ r e p o r t s _ q u e u e  |  2  |  C o m p l e t e d   R e p o r t s   Q u e u e  | {::nomarkdown}  T h i s   i s   a   t e m p o r a r y   l i s t   o f   f i n a l   p a t h   r e p o r t s   t o   b e   p r i n t e d   o n   d e m a n d . \ r   E n t r i e s   a u t o m a t i c a l l y   a r e   e n t e r e d   w h e n   t h e   m i c r o s c o p i c   d i a g n o s e s   o r   s u p p l e m e n t a r y   a r e   e n t e r e d   f o r   S u r g   p a t h ,   C y t o p a t h   o r   E l e c t r o n   m i c r o s c o p y .  {:/} |  [ O B J E C T ]  |  |  | [Completed_Reports_Queue-69_23](#Completed_Reports_Queue-69_23)  | 
|  i n t e r i m _ r e p o r t _ n u m b e r  |  3  |  I n t e r i m   R e p o r t   N u m b e r  | {::nomarkdown}    T h i s   f i e l d   c o n t a i n s   t h e   n u m e r i c   s e q u e n c e   o f   t h i s   p a r t i c u l a r   i n t e r i m   r e p o r t .  {:/} |  [ O B J E C T ]  |  |  | [Interim_Report_Number-69_29](#Interim_Report_Number-69_29)  | 
|  r e p o r t s _ o n _ d e m a n d  |  4  |  R e p o r t s   O n   D e m a n d  | {::nomarkdown}  N a m e   o f   t h e   r e p o r t   o n   d e m a n d   f r o m   t h e   L a b   D a t a   f i l e  {:/} |  [ O B J E C T ]  |  |  | [Reports_On_Demand-69_27](#Reports_On_Demand-69_27)  | 
|  e n t r y _ n u m b e r  |  5  |  E n t r y   N u m b e r  | {::nomarkdown}  E n t r y   n u m b e r   t o   a p p r o p r i a t e   f i l e  {:/} |  [ O B J E C T ]  |  |  | [Entry_Number-69_24](#Entry_Number-69_24)  | 
|  g e n e r i c _ l i s t  |  6  |  G e n e r i c   L i s t  | {::nomarkdown}  G e n e r i c   l a b e l   n a m e  {:/} |  [ O B J E C T ]  |  |  | [Generic_List-69_26](#Generic_List-69_26)  | 
|  u s e r _ r e q u e s t _ l i s t  |  7  |  U s e r   R e q u e s t   L i s t  | {::nomarkdown}  N a m e s   o f   u s e r s   f r o m   f i l e   2 0 0  {:/} |  [ O B J E C T ]  |  |  | [User_Request_List-69_28](#User_Request_List-69_28)  | 
|  f i l e  |  8  |  F i l e  | {::nomarkdown}  F i l e s   f o r   t e m p o r a r y   l i s t s   o f   e n t r i e s .  {:/} |  [ O B J E C T ]  |  |  | [File-69_31](#File-69_31)  | 
|  l a b e l s  |  9  |  L a b e l s  | {::nomarkdown}  I D   n u m b e r   o f   l a b e l  {:/} |  [ O B J E C T ]  |  |  | [Labels-69_25](#Labels-69_25)  | 
|  s n o m e d _ _ t c _ c o d i n g  |  1 0  |  S n o m e d   &   T c   C o d i n g  | {::nomarkdown}  T e x t   e n t e r e d   h e r e   w i l l   a p p e a r   o n   t h e   p r e l i m i n a r y   p a t h o l o g y   r e p o r t   \ r a f t e r   t h e   c u m   p a t h   s u m m a r y .  {:/} |  S T R I N G  |  |  |  | 
|  t o p o g r a p h y _ c a t e g o r y  |  1 1  |  T o p o g r a p h y   C a t e g o r y  | {::nomarkdown}  S N O M E D   c o d e d   t o p o g r a p h y   c a t e g o r i e s  {:/} |  [ O B J E C T ]  |  |  | [Topography_Category-69_211](#Topography_Category-69_211)  | 
|  m o r p h o l o g y _ e n t r y  |  1 2  |  M o r p h o l o g y   E n t r y  | {::nomarkdown}  S N O M E D   m o r p h o l o g y   e n t r i e s  {:/} |  [ P O I N T E R ]  |  |  |  { i d : M o r p h o l o g y _ F i e l d - 6 1 _ 1 }  | 
|  t e s t _ l i s t _ n u m b e r  |  6 0  |  T e s t   L i s t   N u m b e r  | {::nomarkdown}  T h e   l i s t   n u m b e r   f o r   a   g r o u p   o f   s e l e c t e d   l a b   t e s t s .  {:/} |  [ O B J E C T ]  |  |  | [Test_List_Number-69_33](#Test_List_Number-69_33)  | 
|  t o p o g r a p h y  |  6 1  |  T o p o g r a p h y  | {::nomarkdown}  F o r   e n t r i e s   t h e   m o s t   r e c e n t   r e s u l t s   o f   t e s t s   s e l e c t e d   b e l o w   w i l l   b e   d i s p l a y e d   o r   p r i n t e d .   \ r   E x .   Y o u   m a y   w a n t   t o   k n o w   t h e   r e s u l t s   o f   s e l e c t e d   c h e m i s t r i e s   f o r   a   p a t i e n t   w h o   h a s   j u s t   h a d   a   l i v e r   b i o p s y .     T o p o g r a p h y   e n t e r e d   w o u l d   b e   L I V E R \ r   F o r   b l o o d   b a n k   t h e   t e s t s   e n t e r e d   w i l l   b e   d i s p l a y e d   w h e n e v e r   a   \ r   c r o s s m a t c h   i s   o r d e r e d   o r   w h e n   c o m p o n e n t s   a r e   d i s p l a y e d .  {:/} |  [ O B J E C T ]  |  |  | [Topography-69_61](#Topography-69_61)  | 
|  d a t a _ c h a n g e _ d a t e  |  9 9 9  |  D a t a   C h a n g e   D a t e  | {::nomarkdown}  D a t e   o f   t h e   D a t a   c h a n g e  {:/} |  [ O B J E C T ]  |  |  | [Data_Change_Date-69_299](#Data_Change_Date-69_299)  | 

## <a name="Slide_Label-69_22"></a>Slide_Label-69_22 

<dl>
<dt>id</dt><dd> S l i d e _ L a b e l - 6 9 _ 2 2 </dd>
<dt>label</dt><dd> S l i d e   L a b e l </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s l i d e _ l a b e l  |  . 0 1  |  S l i d e   L a b e l  |  |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  p r i n t _ n a m e  |  . 0 2  |  P r i n t   N a m e  | {::nomarkdown}  E n t e r   t h e   a c t u a l   t e x t   y o u   w a n t   p r i n t e d   o n   t h e   s l i d e   l a b e l .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Incomplete_Reports_Queue-69_21"></a>Incomplete_Reports_Queue-69_21 

<dl>
<dt>id</dt><dd> I n c o m p l e t e _ R e p o r t s _ Q u e u e - 6 9 _ 2 1 </dd>
<dt>label</dt><dd> I n c o m p l e t e   R e p o r t s   Q u e u e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  l r d f n  |  . 0 1  |  L r d f n  |  |  N U M E R I C  |  | REQUIRED |  | 
|  i n v e r s e _ d a t e  |  1  |  I n v e r s e   D a t e  |  |  N U M E R I C  |  | REQUIRED |  | 
|  a c c e s s i o n _ d a t e  |  2  |  A c c e s s i o n   D a t e  | {::nomarkdown}  W h e n   s p e c i m e n   w a s   a c c e s s i o n e d .   S t o r e d   i n   e x t e r n a l   d a t e   f o r m a t . \ r   U s u a l l y   o n l y   t h e   y e a r   w i l l   b e   p r e s e n t .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Completed_Reports_Queue-69_23"></a>Completed_Reports_Queue-69_23 

<dl>
<dt>id</dt><dd> C o m p l e t e d _ R e p o r t s _ Q u e u e - 6 9 _ 2 3 </dd>
<dt>label</dt><dd> C o m p l e t e d   R e p o r t s   Q u e u e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  l r d f n  |  . 0 1  |  L r d f n  | {::nomarkdown}  T h i s   i s   a   t e m p o r a r y   l i s t   o f   f i n a l   p a t h   r e p o r t s   t o   b e   p r i n t e d   o n   d e m a n d .     E n t r i e s   a u t o m a t i c a l l y   a r e   e n t e r e d   w h e n   t h e   m i c r o s c o p i c   d i a g n o s e s   o r   s u p p l e m e n t a r y   a r e   e n t e r e d   f o r   S u r g   p a t h ,   C y t o p a t h   o r   E l e c t r o n   m i c r o s c o p y .  {:/} |  N U M E R I C  |  | REQUIRED |  | 
|  i n v e r s e _ d a t e  |  1  |  I n v e r s e   D a t e  |  |  N U M E R I C  |  |  |  | 
|  a c c e s s i o n _ d a t e  |  2  |  A c c e s s i o n   D a t e  | {::nomarkdown}  W h e n   s p e c i m e n   a c c e s s i o n e d .   S t o r e d   i n   e x t e r n a l   d a t e   f o r m a t . \ r   U s u a l l y   o n l y   t h e   y e a r   w i l l   b e   s t o r e d .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Interim_Report_Number-69_29"></a>Interim_Report_Number-69_29 

<dl>
<dt>id</dt><dd> I n t e r i m _ R e p o r t _ N u m b e r - 6 9 _ 2 9 </dd>
<dt>label</dt><dd> I n t e r i m   R e p o r t   N u m b e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  i n t e r i m _ r e p o r t _ n u m b e r  |  . 0 1  |  I n t e r i m   R e p o r t   N u m b e r  |  |  N U M E R I C  |  | REQUIRED |  | 
|  l o c a t i o n  |  1  |  L o c a t i o n  |  |  S T R I N G  |  | REQUIRED, INDEXED |  | 

## <a name="Reports_On_Demand-69_27"></a>Reports_On_Demand-69_27 

<dl>
<dt>id</dt><dd> R e p o r t s _ O n _ D e m a n d - 6 9 _ 2 7 </dd>
<dt>label</dt><dd> R e p o r t s   O n   D e m a n d </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  r e p o r t s _ o n _ d e m a n d  |  . 0 1  |  R e p o r t s   O n   D e m a n d  | {::nomarkdown}    P o i n t e r   t o   L A B   D A T A   f i l e   ( # 6 3 ) .  {:/} |  P O I N T E R  |  | REQUIRED | Lab_Data-63 | 
|  n a m e  |  . 0 2  |  N a m e  |  |  S T R I N G  |  |  |  | 
|  s e x  |  . 0 3  |  S e x  |  |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 
|  d o b  |  . 0 4  |  D o b  | {::nomarkdown}      D a t e   o f   B i r t h .  {:/} |  D A T E - T I M E  |  |  |  | 
|  i d - _ 1  |  . 1  |  I d  | {::nomarkdown}    U s u a l l y   t h e   S S N   o f   t h e   p a t i e n t .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Entry_Number-69_24"></a>Entry_Number-69_24 

<dl>
<dt>id</dt><dd> E n t r y _ N u m b e r - 6 9 _ 2 4 </dd>
<dt>label</dt><dd> E n t r y   N u m b e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e n t r y _ n u m b e r  |  . 0 1  |  E n t r y   N u m b e r  |  |  N U M E R I C  |  | REQUIRED |  | 
|  p a r e n t _ f i l e  |  . 0 2  |  P a r e n t   F i l e  |  |  N U M E R I C  |  |  |  | 
|  n a m e  |  . 0 3  |  N a m e  | {::nomarkdown}    N a m e   o f   t h e   p a t i e n t .  {:/} |  S T R I N G  |  | INDEXED |  | 

## <a name="Generic_List-69_26"></a>Generic_List-69_26 

<dl>
<dt>id</dt><dd> G e n e r i c _ L i s t - 6 9 _ 2 6 </dd>
<dt>label</dt><dd> G e n e r i c   L i s t </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  g e n e r i c _ l a b e l  |  . 0 1  |  G e n e r i c   L a b e l  | {::nomarkdown}    T h e   n a m e   o f   t h e   g e n e r i c   l a b e l .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  i t e m _ 2  |  . 0 2  |  I t e m   2  | {::nomarkdown}    F i r s t   l i n e   o f   t h e   l a b e l .  {:/} |  S T R I N G  |  |  |  | 
|  i t e m _ 3  |  . 0 3  |  I t e m   3  | {::nomarkdown}    T h e   s e c o n d   l i n e   o f   t h e   l a b e l .  {:/} |  S T R I N G  |  |  |  | 
|  i t e m _ 4  |  . 0 4  |  I t e m   4  | {::nomarkdown}    T h i r d   l i n e   o f   t h e   l a b e l .  {:/} |  S T R I N G  |  |  |  | 
|  i t e m _ 5  |  . 0 5  |  I t e m   5  | {::nomarkdown}    T h e   f o r t h   l i n e   o f   t h e   l a b e l .  {:/} |  S T R I N G  |  |  |  | 

## <a name="User_Request_List-69_28"></a>User_Request_List-69_28 

<dl>
<dt>id</dt><dd> U s e r _ R e q u e s t _ L i s t - 6 9 _ 2 8 </dd>
<dt>label</dt><dd> U s e r   R e q u e s t   L i s t </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  u s e r  |  . 0 1  |  U s e r  | {::nomarkdown}    P o i n t s   t o   t h e   N E W   P E R S O N   f i l e   ( # 2 0 0 ) .  {:/} |  P O I N T E R  |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
|  l a s t _ d a t e _ u s e d  |  . 0 2  |  L a s t   D a t e   U s e d  | {::nomarkdown}    T h e   l a s t   d a t e   t h i s   w a s   p r i n t e d .  {:/} |  D A T E - T I M E  |  |  |  | 
|  l r d f n  |  1  |  L r d f n  |  |  [ O B J E C T ]  |  |  |  { i d : L r d f n - 6 9 _ 3 , f m I d : 6 9 . 3 , l a b e l : L r d f n , p r o p e r t i e s : [ { i d : l r d f n , f m I d : . 0 1 , l a b e l : L r d f n , d e s c r i p t i o n :   I n t e r n a l   f i l e   n u m b e r   i n   t h e   L A B   D A T A   f i l e   ( # 6 3 ) . , d a t a t y p e : P O I N T E R , r e q u i r e d : t r u e , r a n g e : { i d : L a b _ D a t a - 6 3 } } , { i d : p a t i e n t _ n a m e , f m I d : . 0 2 , l a b e l : P a t i e n t   N a m e , d e s c r i p t i o n :   P a t i e n t ' s   n a m e . , d a t a t y p e : S T R I N G , i n d e x e d : t r u e } , { i d : s e x , f m I d : . 0 3 , l a b e l : S e x , d a t a t y p e : E N U M E R A T I O N , r a n g e : { M A L E : M , F E M A L E : F } } , { i d : d o b , f m I d : . 0 4 , l a b e l : D o b , d e s c r i p t i o n :   D a t e   o f   b i r t h . , d a t a t y p e : D A T E - T I M E } , { i d : l o c a t i o n , f m I d : . 0 5 , l a b e l : L o c a t i o n , d a t a t y p e : S T R I N G } , { i d : v a _ p a t i e n t _ n u m b e r , f m I d : . 0 6 , l a b e l : V A   P a t i e n t   N u m b e r , d e s c r i p t i o n : I f   p a t i e n t   i s   e n t e r e d   i n   f i l e   2   t h e   i n t e r n a l   f i l e   n u m b e r   ( D F N ) \ r   f o r   f i l e   2   w i l l   a p p e a r   h e r e . , d a t a t y p e : P O I N T E R , r a n g e : { i d : P a t i e n t - 2 } } , { i d : i d - _ 1 , f m I d : . 1 , l a b e l : I d , d a t a t y p e : S T R I N G } , { i d : p a t i e n t _ g r o u p , f m I d : 1 , l a b e l : P a t i e n t   G r o u p , d e s c r i p t i o n : T o   p r i n t   o n l y   a   s p e c i f i c   g r o u p   o f   p a t i e n t s   e n t e r   t h a t   g r o u p   n a m e   h e r e . , d a t a t y p e : S T R I N G , i n d e x e d : t r u e } ] }  | 
|  l a b _ t e s t _ g r o u p  |  6 0  |  L a b   T e s t   G r o u p  |  |  [ O B J E C T ]  |  |  |  { i d : L a b _ T e s t _ G r o u p - 6 9 _ 3 5 , f m I d : 6 9 . 3 5 , l a b e l : L a b   T e s t   G r o u p , p r o p e r t i e s : [ { i d : l a b _ t e s t _ g r o u p , f m I d : . 0 1 , l a b e l : L a b   T e s t   G r o u p , d e s c r i p t i o n : Y o u   c a n   h a v e   o n e   o r   m o r e   g r o u p s .   E a c h   g r o u p   c a n   h a v e   u p   t o   7   t e s t s . , d a t a t y p e : N U M E R I C , r e q u i r e d : t r u e } , { i d : t e s t , f m I d : 1 , l a b e l : T e s t , d a t a t y p e : [ O B J E C T ] , r a n g e : { i d : T e s t - 6 9 _ 3 6 , f m I d : 6 9 . 3 6 , l a b e l : T e s t , p r o p e r t i e s : [ { i d : n u m b e r , f m I d : . 0 0 1 , l a b e l : N u m b e r , d a t a t y p e : I E N } , { i d : t e s t , f m I d : . 0 1 , l a b e l : T e s t , d e s c r i p t i o n : U p   t o   7   t e s t s   a l l o w e d .     T h e   n u m b e r   w i l l   d e t e r m i n e   p l a c e m e n t   o f   t h e \ r   t e s t   o n   t h e   d i s p l a y   o r   p r i n t . , d a t a t y p e : P O I N T E R , r e q u i r e d : t r u e , r a n g e : { i d : L a b o r a t o r y _ T e s t - 6 0 } } ] } } ] }  | 

## <a name="File-69_31"></a>File-69_31 

<dl>
<dt>id</dt><dd> F i l e - 6 9 _ 3 1 </dd>
<dt>label</dt><dd> F i l e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  f i l e  |  . 0 1  |  F i l e  | {::nomarkdown}  L i s t   o f   s e l e c t e d   e n t r i e s   i n   a   f i l e .  {:/} |  N U M E R I C  |  | REQUIRED |  | 
|  s t a r t _ d a t e  |  . 0 2  |  S t a r t   D a t e  |  |  S T R I N G  |  |  |  | 
|  e n d _ d a t e  |  . 0 3  |  E n d   D a t e  |  |  S T R I N G  |  |  |  | 
|  u s e r  |  . 0 4  |  U s e r  | {::nomarkdown}  P e r s o n   w h o   c r e a t e d   l i s t   o f   e n t r i e s  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  f i l e _ e n t r y  |  1  |  F i l e   E n t r y  |  |  [ O B J E C T ]  |  |  |  { i d : F i l e _ E n t r y - 6 9 _ 3 2 , f m I d : 6 9 . 3 2 , l a b e l : F i l e   E n t r y , p r o p e r t i e s : [ { i d : n u m b e r , f m I d : . 0 0 1 , l a b e l : N u m b e r , d a t a t y p e : I E N } , { i d : f i l e _ e n t r y _ n a m e , f m I d : . 0 1 , l a b e l : F i l e   E n t r y   N a m e , d e s c r i p t i o n : E n t e r   t h e   n a m e   o f   t h e   e n t r y   i n   t h e   f i l e   ( . 0 1   f i e l d ) , d a t a t y p e : S T R I N G , i n d e x e d : t r u e , r e q u i r e d : t r u e } , { i d : e n t r y _ c o m m e n t , f m I d : . 0 2 , l a b e l : E n t r y   C o m m e n t , d e s c r i p t i o n : D e s c r i p t i o n   t o   i d e n t i f y   t h e   s p e c i f i c   e n t r y , d a t a t y p e : S T R I N G } , { i d : d a t e , f m I d : 1 , l a b e l : D a t e , d a t a t y p e : [ O B J E C T ] , r a n g e : { i d : D a t e - 6 9 _ 3 2 1 , f m I d : 6 9 . 3 2 1 , l a b e l : D a t e , p r o p e r t i e s : [ { i d : d a t e , f m I d : . 0 1 , l a b e l : D a t e , d a t a t y p e : D A T E - T I M E , r e q u i r e d : t r u e } , { i d : r e l a t e d _ t e x t , f m I d : . 0 2 , l a b e l : R e l a t e d   T e x t , d a t a t y p e : S T R I N G } , { i d : m o r e _ r e l a t e d _ t e x t , f m I d : . 0 3 , l a b e l : M o r e   R e l a t e d   T e x t , d a t a t y p e : S T R I N G } , { i d : d a t e _ e n t r y _ p r i n t e d , f m I d : . 0 4 , l a b e l : D a t e   E n t r y   P r i n t e d ? , d e s c r i p t i o n : I f   e n t r y   w a s   p r i n t e d   t h e n   ' Y E S '   s h o u l d   b e   e n t e r e d . \ r   I f   e n t r y   w a s   n o t   p r i n t e d   t h e n   i t   s h o u l d   n o t   b e   d e l e t e d . , d a t a t y p e : B O O L E A N , r a n g e : { f a l s e : 0 , t r u e : 1 } } , { i d : c o m m e n t , f m I d : 1 , l a b e l : C o m m e n t , d a t a t y p e : [ S T R I N G ] } ] } } ] }  | 

## <a name="Labels-69_25"></a>Labels-69_25 

<dl>
<dt>id</dt><dd> L a b e l s - 6 9 _ 2 5 </dd>
<dt>label</dt><dd> L a b e l s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  l a b e l _ i d  |  . 0 1  |  L a b e l   I d  |  |  S T R I N G  |  | REQUIRED |  | 
|  l i n e _ 1  |  . 0 2  |  L i n e   1  |  |  S T R I N G  |  |  |  | 
|  l i n e _ 2  |  . 0 3  |  L i n e   2  |  |  S T R I N G  |  |  |  | 
|  l i n e _ 3  |  . 0 4  |  L i n e   3  |  |  S T R I N G  |  |  |  | 
|  l i n e _ 4  |  . 0 5  |  L i n e   4  |  |  S T R I N G  |  |  |  | 

## <a name="Topography_Category-69_211"></a>Topography_Category-69_211 

<dl>
<dt>id</dt><dd> T o p o g r a p h y _ C a t e g o r y - 6 9 _ 2 1 1 </dd>
<dt>label</dt><dd> T o p o g r a p h y   C a t e g o r y </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  t o p o g r a p h y _ c a t e g o r y  |  . 0 1  |  T o p o g r a p h y   C a t e g o r y  | {::nomarkdown}  P r o v i d e s   a   d e f a u l t   l i s t   o f   t o p o g r a p h y   s e l e c t i o n s   f o r   a n a t o m i c   p a t h o l o g y   \ r s e a r c h e s   a n d   r e p o r t s .     F o r   e x a m p l e   i f   2 8   i s   a   s e l e c t i o n   t h e n   a l l   \ r S N O M E D   c o d e d   t o p o g r a p h i e s   b e g i n n i n g   w i t h   2 8   w i l l   b e   s e l e c t e d .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  c o m m e n t  |  . 0 2  |  C o m m e n t  | {::nomarkdown}  E n t e r   a   c o m m e n t   a s s o c i a t e d   w i t h   t h e   t o p o g r a p h y   c a t e g o r y   e n t r y .  {:/} |  S T R I N G  |  | REQUIRED |  | 

## <a name="Test_List_Number-69_33"></a>Test_List_Number-69_33 

<dl>
<dt>id</dt><dd> T e s t _ L i s t _ N u m b e r - 6 9 _ 3 3 </dd>
<dt>label</dt><dd> T e s t   L i s t   N u m b e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  t e s t _ l i s t _ n u m b e r  |  . 0 1  |  T e s t   L i s t   N u m b e r  |  |  N U M E R I C  |  | REQUIRED |  | 
|  t e s t  |  1  |  T e s t  |  |  [ O B J E C T ]  |  |  |  { i d : T e s t - 6 9 _ 3 4 , f m I d : 6 9 . 3 4 , l a b e l : T e s t , p r o p e r t i e s : [ { i d : n u m b e r , f m I d : . 0 0 1 , l a b e l : N u m b e r , d a t a t y p e : I E N } , { i d : t e s t , f m I d : . 0 1 , l a b e l : T e s t , d a t a t y p e : P O I N T E R , r e q u i r e d : t r u e , r a n g e : { i d : L a b o r a t o r y _ T e s t - 6 0 } } , { i d : s p e c i m e n , f m I d : . 0 2 , l a b e l : S p e c i m e n , d a t a t y p e : P O I N T E R , r e q u i r e d : t r u e , r a n g e : { i d : T o p o g r a p h y _ F i e l d - 6 1 } } , { i d : v a l u e , f m I d : . 0 3 , l a b e l : V a l u e , d a t a t y p e : S T R I N G , r e q u i r e d : t r u e } ] }  | 

## <a name="Topography-69_61"></a>Topography-69_61 

<dl>
<dt>id</dt><dd> T o p o g r a p h y - 6 9 _ 6 1 </dd>
<dt>label</dt><dd> T o p o g r a p h y </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  t o p o g r a p h y  |  . 0 1  |  T o p o g r a p h y  | {::nomarkdown}  E n t e r   h e r e   t h e   s p e c i m e n   o r   o r g a n / t i s s u e   t h a t   w i l l   b e   a s s o c i a t e d   w i t h   t h e   p r e s e l e c t e d   t e s t s   t o   b e   d i s p l a y e d   o r   p r i n t e d .  {:/} |  P O I N T E R  |  | REQUIRED | Topography_Field-61 | 
|  t e s t _ t o _ d i s p l a y  |  1  |  T e s t   T o   D i s p l a y  | {::nomarkdown}  M o s t   r e c e n t   r e s u l t s ,   i f   a n y ,   w i l l   b e   d i s p l a y e d   f o r   t e s t s   s e l e c t e d   a s s o c i a t e d   w i t h   a   s p e c i f i c   t o p o g r a p h y   i n d i c a t e d   a b o v e   w h e n   t h a t   o r g a n   o r   t i s s u e   i s   s u b m i t t e d   t o   a n a t o m i c   p a t h o l o g y .  {:/} |  [ O B J E C T ]  |  |  |  { i d : T e s t _ T o _ D i s p l a y - 6 9 _ 6 2 , f m I d : 6 9 . 6 2 , l a b e l : T e s t   T o   D i s p l a y , p r o p e r t i e s : [ { i d : n u m b e r , f m I d : . 0 0 1 , l a b e l : N u m b e r , d a t a t y p e : I E N } , { i d : t e s t _ t o _ d i s p l a y , f m I d : . 0 1 , l a b e l : T e s t   T o   D i s p l a y , d e s c r i p t i o n : M o s t   r e c e n t   r e s u l t s ,   i f   a n y ,   w i l l   b e   d i s p l a y e d   f o r   t e s t s   s e l e c t e d   \ r   a s s o c i a t e d   w i t h   a   s p e c i m e n . , d a t a t y p e : P O I N T E R , r e q u i r e d : t r u e , r a n g e : { i d : L a b o r a t o r y _ T e s t - 6 0 } } , { i d : s p e c i m e n , f m I d : . 0 2 , l a b e l : S p e c i m e n , d a t a t y p e : P O I N T E R , r e q u i r e d : t r u e , r a n g e : { i d : T o p o g r a p h y _ F i e l d - 6 1 } } ] }  | 
|  t e s t _ t o _ p r i n t  |  2  |  T e s t   T o   P r i n t  |  |  [ O B J E C T ]  |  |  |  { i d : T e s t _ T o _ P r i n t - 6 9 _ 6 3 , f m I d : 6 9 . 6 3 , l a b e l : T e s t   T o   P r i n t , p r o p e r t i e s : [ { i d : n u m b e r , f m I d : . 0 0 1 , l a b e l : N u m b e r , d a t a t y p e : I E N } , { i d : t e s t _ t o _ p r i n t , f m I d : . 0 1 , l a b e l : T e s t   T o   P r i n t , d a t a t y p e : P O I N T E R , r e q u i r e d : t r u e , r a n g e : { i d : L a b o r a t o r y _ T e s t - 6 0 } } , { i d : s p e c i m e n , f m I d : . 0 2 , l a b e l : S p e c i m e n , d a t a t y p e : P O I N T E R , r e q u i r e d : t r u e , r a n g e : { i d : T o p o g r a p h y _ F i e l d - 6 1 } } ] }  | 

## <a name="Data_Change_Date-69_299"></a>Data_Change_Date-69_299 

<dl>
<dt>id</dt><dd> D a t a _ C h a n g e _ D a t e - 6 9 _ 2 9 9 </dd>
<dt>label</dt><dd> D a t a   C h a n g e   D a t e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d a t a _ c h a n g e _ d a t e  |  . 0 1  |  D a t a   C h a n g e   D a t e  | {::nomarkdown}  D a t e   t h e   d a t a   w a s   c h a n g e d .  {:/} |  D A T E - T I M E  |  | REQUIRED |  | 
|  p e r s o n _ c h a n g i n g _ d a t a  |  . 0 2  |  P e r s o n   C h a n g i n g   D a t a  |  |  S T R I N G  |  |  |  | 
|  d a t a _ e l e m e n t  |  . 0 3  |  D a t a   E l e m e n t  | {::nomarkdown}    N a m e   o f   t h e   t e s t   b e i n g   e d i t e d .  {:/} |  S T R I N G  |  |  |  | 
|  o l d _ v a l u e  |  . 0 4  |  O l d   V a l u e  | {::nomarkdown}    P r e v i o u s   t e s t   r e s u l t .  {:/} |  S T R I N G  |  |  |  | 
|  n e w _ v a l u e  |  . 0 5  |  N e w   V a l u e  | {::nomarkdown}    N e w   t e s t   r e s u l t .  {:/} |  S T R I N G  |  |  |  | 
|  f i l e  |  . 0 6  |  F i l e  | {::nomarkdown}    F i l e   w h e r e   t h e   d a t a   i s   s t o r e d .  {:/} |  S T R I N G  |  |  |  | 
|  f i l e _ e n t r y  |  . 0 7  |  F i l e   E n t r y  | {::nomarkdown}    T h e   n u m e r i c   e n t r y   o f   t h e   f i l e .  {:/} |  S T R I N G  |  |  |  | 
|  i n t e r n a l _ f i l e _ n u m b e r  |  . 0 8  |  I n t e r n a l   F i l e   #  | {::nomarkdown}    T h e   i n t e r n a l   n u m b e r   w h e r e   t h e   d a t a   i s   s t o r e d .  {:/} |  S T R I N G  |  |  |  | 
|  s u b f i l e _ f i e l d _ n a m e  |  1  |  S u b f i l e   F i e l d   N a m e  |  |  [ O B J E C T ]  |  |  |  { i d : S u b f i l e _ F i e l d _ N a m e - 6 9 _ 3 7 , f m I d : 6 9 . 3 7 , l a b e l : S u b f i l e   F i e l d   N a m e , p r o p e r t i e s : [ { i d : s u b f i l e _ f i e l d _ n a m e , f m I d : . 0 1 , l a b e l : S u b f i l e   F i e l d   N a m e , d a t a t y p e : S T R I N G , i n d e x e d : t r u e , r e q u i r e d : t r u e } , { i d : s u b f i l e _ f i e l d _ e n t r y , f m I d : . 0 2 , l a b e l : S u b f i l e   F i e l d   E n t r y , d a t a t y p e : S T R I N G } , { i d : s u b f i l e _ f i e l d _ n u m b e r , f m I d : . 0 3 , l a b e l : S u b f i l e   F i e l d   # , d a t a t y p e : S T R I N G } ] }  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}