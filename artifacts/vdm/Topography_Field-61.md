---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Topography_Field-61 

<dl>
<dt>id</dt><dd> T o p o g r a p h y _ F i e l d - 6 1 </dd>
<dt>fmId</dt><dd> 6 1 </dd>
<dt>label</dt><dd> T o p o g r a p h y   F i e l d </dd>
<dt>location</dt><dd> ^ L A B ( 6 1 , </dd>
<dt>description</dt><dd>  T h i s   i s   t h e   T O P O G R A P H Y   f i l e   o f   S N O M E D  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h e   n a m e   o f   t h e   s p e c i m e n   o r   s o u r c e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  i c d o _ c o d e  |  . 0 7  |  I c d o   C o d e  | {::nomarkdown}  T h e   a p p r o p r i a t e   I C D 0   c o d e   a s s o c i a t e d   w i t h   t h i s   s p e c i m e n   o r   s o u r c e .  {:/} |  S T R I N G  |  |  |  | 
|  h l 7 _ c o d e  |  . 0 8  |  H l 7   C o d e  |  |  S T R I N G  |  |  |  | 
|  l e d i _ h l 7  |  . 0 9  |  L e d i   H l 7  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   H L 7   s t a n d a r d   s p e c i m e n   t y p e   c o d e .  {:/} |  P O I N T E R  |  |  | Lab_Electronic_Codes-64_061 | 
|  t i m e _ a s p e c t  |  . 0 9 6 1  |  T i m e   A s p e c t  | {::nomarkdown}  T h i s   f i e l d   d e s c r i b e s   t h e   t i m e   a s p e c t   f o r   t h i s   s p e c i m e n . \ r ( i . e .   2 4 h o u r ,   p o i n t ,   f a s t i n g ,   3 0   m i n s   . . . ) \ r   Y o u   m a y   s e l e c t   a n y   e n t r y   i n   t h e   L A B   E L E C T R O N I C   C O D E   ( # 6 4 . 0 6 1 )   t h a t   h a s \ r t h e   t y p e   o f   S P E C I M E N . \ r   \ r T h i s   f i e l d   i s   u s e d   t o   d e t e r m i n e   t h e   c o r r e c t   s p e c i m e n   L O I N C   c o d e   d u r i n g \ r v e r i f i c a t i o n   o f   r e s u l t s .  {:/} |  P O I N T E R  |  |  | Lab_Electronic_Codes-64_061 | 
|  s n o m e d _ c o d e  |  2  |  S n o m e d   C o d e  | {::nomarkdown}  T h e   c o d e   c o n s i s t s   o f   t h e   c h a r a c t e r s   f o l l o w i n g   \  T - \    i n   t h e   S N O M E D   r e f e r e n c e   b o o k .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  s e x _ s p e c i f i c  |  2 . 5  |  S e x   S p e c i f i c  | {::nomarkdown}  I f   t h i s   s p e c i m e n   i s   s p e c i f i c   t o   o n e   s e x   o n l y ,   e n t e r   F   f o r   f e m a l e   o r   M \ r f o r   m a l e .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 
|  s y n o n y m s  |  3  |  S y n o n y m s  | {::nomarkdown}  T h i s   i s   a   m u l t i p l e   f i e l d .     E n t e r   s y n o n y m s   o r   c o m m o n \ r m i s s p e l l i n g s   o f   t h e   s p e c i m e n   o r   o r g a n / t i s s u e .  {:/} |  [ S T R I N G ]  |  |  |  | 
|  w e i g h  |  4  |  W e i g h  | {::nomarkdown}  W E I G H   i s   a   Y E S / N O   q u e s t i o n .     A n s w e r   Y E S   i f   y o u   w a n t   t h i s   s p e c i m e n   t o \ r b e   w e i g h e d   f o r   s u r g i c a l   p a t h o l o g y .     A   n u l l   a n s w e r   e q u a l s   N O .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
|  c o l l e c t i o n _ s a m p l e  |  4 . 1  |  C o l l e c t i o n   S a m p l e  | {::nomarkdown}  T h e   n a m e   o f   t h e   c o l l e c t i o n   s a m p l e   f o r   t h i s   s p e c i m e n . \ r P o i n t s   t o   t h e   C O L L E C T I O N   S A M P L E   f i l e .  {:/} |  P O I N T E R  |  |  | Collection_Sample-62 | 
|  j o u r n a l _ r e f e r e n c e  |  5  |  J o u r n a l   R e f e r e n c e  | {::nomarkdown}  T h i s   i s   a   m u l t i p l e   f i e l d .     Y o u   m a y   e n t e r   J o u r n a l   r e f e r e n c e s   t h a t   a p p l y \ r t o   t h i s   s p e c i m e n . \ r P o i n t s   t o   F I L E   # 9 5 .  {:/} |  [ O B J E C T ]  |  |  | [Journal_Reference-61_02](#Journal_Reference-61_02)  | 
|  a b b r e v i a t i o n  |  6  |  A b b r e v i a t i o n  | {::nomarkdown}  T h i s   m u s t   b e   a   1 , 2 ,   o r   3   c h a r a c t e r   a b b r e v i a t i o n   o f   t h e   s p e c i m e n .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  s n o m e d _ c t _ i d  |  2 0  |  S n o m e d   C t   I d  | {::nomarkdown}  T h i s   i s   t h e   S N O M E D   C T   c o n c e p t   i d e n t i f i e r   f o r   t h i s   e n t r y .   I f   t h i s \ r e n t r y   i s   n u l l   t h e n   t h e   e n t r y   i s   e i t h e r   u n m a p p e d   o r   n o   v a l i d   S N O M E D   c o n c e p t \ r t e r m   e x i s t s   t o   m a p   t h i s   t e r m . \ r   \ r T h i s   f i e l d   i s   n o t   e d i t a b l e   e x c e p t   b y   t h e   L a b   s o f t w a r e .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  s c t _ c o d e _ s t a t u s  |  2 1  |  S c t   C o d e   S t a t u s  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e   t h e   s t a t u s   o r   d i s p o s i t i o n   o f   t h i s   e n t r y . \ r   P     =   S N O M E D   P r e f e r r e d   t e r m \ r   S     =   S N O M E D   S y n o n y m   t e r m \ r   L     =   L o c a l   s p e l l i n g   o f   a   S N O M E D   t e r m   ( m i s s - s p e l l e d ) \ r   R     =   R e f e r r e d   t o   n a t i o n a l   c o d e r s   t o   d e t e r m i n e   i f   a c c e p t a b l e \ r   X     =   N o   a p p l i c a b l e   m a p p i n g \ r   L N   =   N e w   t e r m   p e n d i n g   L E X I C O N   r e l e a s e / u p d a t e . \ r   R N   =   S T S   R e q u e s t   N e w   C o d e \ r   E     =   E r r o r   e n c o u n t e r e d   w h e n   a p p l y i n g   S T S   d i s p o s i t i o n   t o   f i l e   e n t r y .    {:/} |  E N U M E R A T I O N  |  | INDEXED | {::nomarkdown}<dl><dt>S</dt><dd>SYNONYM</dd><dt>X</dt><dd>NO APPLICABLE MAPPING</dd><dt>LN</dt><dd>NEW TERM PENDING LEXICON UPDATE</dd><dt>E</dt><dd>ERROR</dd><dt>RN</dt><dd>STS REQUEST NEW CODE</dd><dt>P</dt><dd>PREFERRED TERM</dd><dt>L</dt><dd>LOCAL</dd><dt>R</dt><dd>REFERRED</dd></dl>{:/} | 
|  s c t _ t o p _ c o n c e p t  |  2 2  |  S c t   T o p   C o n c e p t  | {::nomarkdown}  T h i s   f i e l d   I d e n t i f i e s   t h e   S N O M E D   C T   t o p   l e v e l   c o n c e p t   f o r   t h i s   S N O M E D \ r c o d e .   T h i s   i s   u s e f u l   t o   d e t e r m i n e   t h e   p r o p e r   c o d e   w h e n   t h e   s p e l l i n g   o f \ r t h e   t e r m s   a r e   i d e n t i c a l   b u t   h a v e   d i f f e r e n t   c o n c e p t   ( m e a n i n g ) .  {:/} |  P O I N T E R  |  |  | Lab_Electronic_Codes-64_061 | 
|  s c t _ s t a t u s _ d a t e  |  2 3  |  S c t   S t a t u s   D a t e  | {::nomarkdown}  T h i s   m u l t i p l e   t r a c k s   t h e   s t a t u s   o f   S N O M E D   S C T   c o d e s   r e f e r r e d   t o   S T S   t o   \ r d e t e r m i n e   i f   t h e   c o d e   i s   a   v a l i d   V H A   S C T   t e r m .     T h i s   f i e l d   i s   n o t   e d i t a b l e \ r e x c e p t   b y   L a b   s o f t w a r e .  {:/} |  [ O B J E C T ]  |  |  | [Sct_Status_Date-61_023](#Sct_Status_Date-61_023)  | 
|  n e g a t i v e _ b a c t e r i o l o g y _ c o m m e n t  |  6 3 . 0 5  |  * n e g a t i v e   B a c t e r i o l o g y   C o m m e n t  | {::nomarkdown}  T h i s   c o m m e n t   f a c i l i t a t e s   b a t c h   e n t r y   o f   m i c r o b i o l o g y   r e s u l t s .     T h e   t e x t   c o n t a i n e d   i n   t h i s   f i e l d   i s   t h e   d e f a u l t   c o m m e n t   f o r   t h e   n a m e d   s p e c i m e n .  {:/} |  S T R I N G  |  |  |  | 
|  i n a c t i v e _ d a t e  |  6 4 . 9 1 0 3  |  I n a c t i v e   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   o n   o r   a f t e r   w h i c h   t h e   e n t r y   w i l l   n o   l o n g e r   b e   a c t i v e .     \ r I n a c t i v e   e n t r i e s   w i l l   n o t   b e   a v a i l a b l e   f o r   s e l e c t i o n   i n   C P R S   n o r   b e   a b l e \ r t o   b e   a s s o c i a t e d   w i t h   a   t e s t   i n   t h e   L A B O R A T O R Y   T E S T   f i l e   ( # 6 0 ) .      {:/} |  D A T E - T I M E  |  |  |  | 

## <a name="Journal_Reference-61_02"></a>Journal_Reference-61_02 

<dl>
<dt>id</dt><dd> J o u r n a l _ R e f e r e n c e - 6 1 _ 0 2 </dd>
<dt>label</dt><dd> J o u r n a l   R e f e r e n c e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  t i t l e _ o f _ a r t i c l e  |  . 0 1  |  T i t l e   O f   A r t i c l e  | {::nomarkdown}  T i t l e   o f   a n   a r t i c l e   t h a t   d i s c u s s e s   t h e   n a m e d   s p e c i m e n .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  a u t h o r s  |  1  |  A u t h o r ( s )  | {::nomarkdown}  A u t h o r ( s )   o f   t h e   n a m e d   a r t i c l e .  {:/} |  S T R I N G  |  |  |  | 
|  m e d i c a l _ j o u r n a l  |  2  |  M e d i c a l   J o u r n a l  | {::nomarkdown}  T h e   n a m e   o f   t h e   m e d i c a l   j o u r n a l   c o n t a i n i n g   t h e   a r t i c l e .     P o i n t s   t o   F I L E   # 9 5 .  {:/} |  P O I N T E R  |  |  | Lab_Journal-95 | 
|  v o l u m e  |  3  |  V o l u m e  | {::nomarkdown}  T h e   v o l u m e   n u m b e r / n a m e   t h a t   c o n t a i n s   t h e   a r t i c l e .  {:/} |  S T R I N G  |  |  |  | 
|  s t a r t i n g _ p a g e  |  4  |  S t a r t i n g   P a g e  | {::nomarkdown}  T h e   f i r s t   p a g e   o f   t h e   a r t i c l e .  {:/} |  S T R I N G  |  |  |  | 
|  d a t e  |  5  |  D a t e  | {::nomarkdown}  D a t e   o f   a r t i c l e .  {:/} |  D A T E - T I M E  |  |  |  | 
|  l i s t _ o n _ p a t i e n t _ r e c o r d  |  6  |  L i s t   O n   P a t i e n t   R e c o r d  | {::nomarkdown}  I f   t h i s   r e f e r e n c e   i s   t o   b e   l i s t e d   o n   a   p a t i e n t   r e c o r d   w h e n e v e r   t h i s   s p e c i m e n   i s   u s e d ,   t h i s   f i e l d   r e q u i r e s   a   Y E S   e n t r y .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Sct_Status_Date-61_023"></a>Sct_Status_Date-61_023 

<dl>
<dt>id</dt><dd> S c t _ S t a t u s _ D a t e - 6 1 _ 0 2 3 </dd>
<dt>label</dt><dd> S c t   S t a t u s   D a t e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s c t _ s t a t u s _ d a t e  |  . 0 1  |  S c t   S t a t u s   D a t e  | {::nomarkdown}  T h e   d a t e   t h e   s t a t u s   w a s   c h a n g e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s c t _ s t a t u s _ c h a n g e _ t o  |  1  |  S c t   S t a t u s   C h a n g e   T o  | {::nomarkdown}  T h i s   f i e l d   t r a c k   t h e   s t a t u s   o f   t e r m s   r e f e r r e d   t o   t h e   E R T   t e a m   t o   \ r d e t e r m i n e   i f   t h i s   c o d e   i s   a   v a l i d   V H A   S N O M E D   S C T   t e r m .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SYNONYM</dd><dt>X</dt><dd>NO APPLICABLE MAPPING</dd><dt>LN</dt><dd>NEW TERM PENDING LEXICON UPDATE</dd><dt>E</dt><dd>ERROR</dd><dt>RN</dt><dd>STS REQUEST NEW CODE</dd><dt>P</dt><dd>PREFERRED TERM</dd><dt>L</dt><dd>LOCAL</dd><dt>R</dt><dd>REFERRED</dd></dl>{:/} | 
|  s c t _ t r a n s a c t i o n _ n u m b e r  |  2  |  S c t   T r a n s a c t i o n   N u m b e r  | {::nomarkdown}  T r a n s a c t i o n   n u m b e r   g e n e r a t e d   b y   L a b o r a t o r y   s o f t w a r e   w h e n   r e f e r r i n g   a   t e r m \ r f o r   m e d i a t i o n   b y   S T S   a n d   m a p p i n g   t o   S N O M E D   C T .  {:/} |  S T R I N G  |  |  |  | 
|  s c t _ s t a t u s _ u s e r  |  3  |  S c t   S t a t u s   U s e r  | {::nomarkdown}  S t o r e   t h e   u s e r   w h o   i n i t i a t e d   t h e   p r o c e s s   t o   a p p l y   t h e   S T S   S N O M E D   C T   c o d e   \ r r e s o l u t i o n   o r   t h e   o r i g i n a l   m a p p i n g   t o   t h i s   f i l e   e n t r y .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  s c t _ c o m m e n t _ t e x t  |  4  |  S c t   C o m m e n t   T e x t  | {::nomarkdown}  C o n t a i n s   t e x t   o r   c o m m e n t s   r e l a t e d   t o   t h e   m a p p i n g   o f   a   t e r m   t o   S N O M E D   C T . \ r T h e   t e x t   c a n   r e l a t e   t o   i n f o r m a t i o n   s u b m i t t e d   t o   S T S   f o r   t h e   t e r m   t o   b e   \ r m a p p e d ,   t h e   c o m m e n t s   r e t u r n e d   b y   S T S   r e l a t e d   t o   t h e   m a p p i n g   a n d   \ r a n y   c o m m e n t s   w h e n   a t t e m p t i n g   t o   a p p l y   t h e   d i s p o s i t i o n   f r o m   S T S .  {:/} |  S T R I N G  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}