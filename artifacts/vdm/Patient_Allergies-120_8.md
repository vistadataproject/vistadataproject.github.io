---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Patient_Allergies-120_8 

<dl>
<dt>id</dt><dd> P a t i e n t _ A l l e r g i e s - 1 2 0 _ 8 </dd>
<dt>fmId</dt><dd> 1 2 0 . 8 </dd>
<dt>label</dt><dd> P a t i e n t   A l l e r g i e s </dd>
<dt>location</dt><dd> ^ G M R ( 1 2 0 . 8 , </dd>
<dt>description</dt><dd>  C o n t a i n s   p a t i e n t   a l l e r g y / a d v e r s e   r e a c t i o n   i n f o r m a t i o n .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  p a t i e n t  |  . 0 1  |  P a t i e n t  | {::nomarkdown}  T h i s   i s   t h e   p a t i e n t   t o   w h o m   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n   p e r t a i n s .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
|  r e a c t a n t  |  . 0 2  |  R e a c t a n t  | {::nomarkdown}  T h i s   i s   t h e   a g e n t   t o   w h i c h   t h e   p a t i e n t   h a d   t h i s   r e a c t i o n .     T h i s   i s   t h e   \ r n a m e   o f   t h e   r e a c t a n t   a n d   w i l l   b e   t h e   r e s u l t   o f   a   l o o k   u p   o n   e i t h e r   t h e   G M R \ r A l l e r g i e s   ( 1 2 0 . 8 2 ) ,   N a t i o n a l   D r u g   ( 5 0 . 6 ) ,   D r u g   I n g r e d i e n t s   ( 5 0 . 4 1 6 ) ,   \ r L o c a l   D r u g   ( 5 0 )   o r   V A   D r u g   C l a s s   ( 5 0 . 6 0 5 )   f i l e s .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  g m r _ a l l e r g y  |  1  |  G M R   A l l e r g y  | {::nomarkdown}  T h i s   f i e l d   i s   a   v a r i a b l e   p o i n t e r   t o   h e l p   r e l a t e   t h i s   a l l e r g y   t o   s o m e \ r r e c o r d   i n   o n e   o f   t h e   f i l e s   t o   w h i c h   t h i s   f i e l d   p o i n t s .     T h e   f i l e s   t h a t   a r e \ r p o i n t e d   t o   a r e   t h e   G M R   A l l e r g i e s   ( 1 2 0 . 8 2 )   f i l e ,   N a t i o n a l   D r u g   ( 5 0 . 6 )   f i l e , \ r D r u g   ( 5 0 )   f i l e ,   D r u g   I n g r e d i e n t s   ( 5 0 . 4 1 6 )   f i l e   a n d   V A   D r u g   C l a s s \ r ( 5 0 . 6 0 5 )   f i l e .  {:/} |  P O I N T E R  |  |  | undefined | 
|  d r u g _ i n g r e d i e n t s  |  2  |  D r u g   I n g r e d i e n t s  | {::nomarkdown}  L i s t   o f   d r u g   i n g r e d i e n t s   t o   w h i c h   p a t i e n t   h a d   r e a c t i o n   f o r   t h i s \ r a l l e r g y / a d v e r s e   r e a c t i o n .  {:/} |  [ P O I N T E R ]  |  |  |  { i d : D r u g _ I n g r e d i e n t s - 5 0 _ 4 1 6 }  | 
|  d r u g _ c l a s s e s  |  3  |  D r u g   C l a s s e s  | {::nomarkdown}  L i s t   o f   V A   d r u g   c l a s s e s   t o   w h i c h   p a t i e n t   h a d   r e a c t i o n   f o r   t h i s \ r a l l e r g y / a d v e r s e   r e a c t i o n .  {:/} |  [ P O I N T E R ]  |  |  |  { i d : V A _ D r u g _ C l a s s - 5 0 _ 6 0 5 }  | 
|  a l l e r g y _ t y p e  |  3 . 1  |  A l l e r g y   T y p e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   t y p e ( s )   f o r   t h i s   c a u s a t i v e   a g e n t .     T h e   u s e r   c a n \ r e n t e r   t h e   t y p e ( s )   s e p a r a t e d   b y   c o m m a s ,   o r   t h e   f o l l o w i n g   c o d e s :     D = D r u g , \ r F = F o o d ,   O = O t h e r .     I f   c o d e s   a r e   u s e d ,   d o   n o t   u s e   c o m m a s   t o   s e p a r a t e   m u l t i p l e \ r c o d e s .     E x a m p l e s   o f   v a l i d   e n t r i e s   a r e :     D R U G   o r   D R U G ,   F O O D   o r   D   o r   D F   o r \ r O T H E R .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  o r i g i n a t i o n _ d a t e _ t i m e  |  4  |  O r i g i n a t i o n   D a t e / t i m e  | {::nomarkdown}  D a t e / t i m e   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n   w a s   e n t e r e d   i n t o   t h e   s y s t e m .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  o r i g i n a t o r  |  5  |  O r i g i n a t o r  | {::nomarkdown}  P e r s o n   w h o   e n t e r e d   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n   i n t o   t h e   s y s t e m .  {:/} |  P O I N T E R  |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
|  o b s e r v e d _ h i s t o r i c a l  |  6  |  O b s e r v e d / h i s t o r i c a l  | {::nomarkdown}  I n d i c a t e s   w h e t h e r   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n   h a s   b e e n   o b s e r v e d   b y   s o m e \ r p e r s o n n e l ,   o r   i f   i t   i s   h i s t o r i c a l   d a t a   g a t h e r e d   a b o u t   t h e   p a t i e n t .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>o</dt><dd>OBSERVED</dd><dt>h</dt><dd>HISTORICAL</dd></dl>{:/} | 
|  r e p o r t a b l e  |  7  |  * r e p o r t a b l e  | {::nomarkdown}  T h i s   f i e l d   w i l l   a l l o w   t h e   d a t a   i n   t h i s   f i l e   t o   b e   u n r e p o r t a b l e   t o   o t h e r \ r p a c k a g e s .     E x a m p l e s   o f   t h i s   i n c l u d e   d r u g - d r u g   i n t e r a c t i o n s   w h i c h   d o   n o t \ r h a v e   t o   b e   s h o w n   a s   a l l e r g i e s / a d v e r s e   r e a c t i o n s . \ r       \ r N o t e :   T h i s   f i e l d   i s   n o   l o n g e r   s u p p o r t e d .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl></dl>{:/} | 
|  r e a c t i o n s  |  1 0  |  R e a c t i o n s  | {::nomarkdown}  T h e s e   a r e   t h e   r e a c t i o n s   o b s e r v e d   f o r   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n .  {:/} |  [ O B J E C T ]  |  |  | [Reactions-120_81](#Reactions-120_81)  | 
|  c h a r t _ m a r k e d  |  1 3  |  C h a r t   M a r k e d  | {::nomarkdown}  A   l i s t   o f   t h o s e   p e o p l e   w h o   i n d i c a t e   t h a t   t h e   p a t i e n t ' s   c h a r t   h a s   b e e n \ r m a r k e d   f o r   t h i s   r e a c t a n t .  {:/} |  [ O B J E C T ]  |  |  | [Chart_Marked-120_813](#Chart_Marked-120_813)  | 
|  i d _ b a n d _ m a r k e d  |  1 4  |  I d   B a n d   M a r k e d  | {::nomarkdown}  A   l i s t   o f   t h o s e   p e o p l e   w h o   i n d i c a t e d   t h a t   t h e   p a t i e n t ' s   I D   b a n d   h a s   b e e n \ r m a r k e d   f o r   t h i s   r e a c t a n t .  {:/} |  [ O B J E C T ]  |  |  | [Id_Band_Marked-120_814](#Id_Band_Marked-120_814)  | 
|  o r i g i n a t o r _ s i g n _ o f f  |  1 5  |  O r i g i n a t o r   S i g n   O f f  | {::nomarkdown}  I n d i c a t e s   w h e t h e r   t h e   o r i g i n a t o r   o f   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n   s i g n e d   o f f   o n   i t ,   s o \ r t h a t   i t   m a y   b e   v e r i f i e d .     A n   a l l e r g y / a d v e r s e   r e a c t i o n   t h a t   i s   n o t   s i g n e d \ r o f f   i s   n o t   p a r t   o f   t h e   p a t i e n t ' s   r e p o r t a b l e   r e a c t i o n s .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  m e c h a n i s m  |  1 7  |  M e c h a n i s m  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   t h e   m e c h a n i s m   o f   t h e   r e a c t i o n . \ r      {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>P</dt><dd>PHARMACOLOGIC</dd><dt>U</dt><dd>UNKNOWN</dd><dt>A</dt><dd>ALLERGY</dd></dl>{:/} | 
|  v e r i f i e d  |  1 9  |  V e r i f i e d  | {::nomarkdown}  I n d i c a t e s   w h e t h e r   t h i s   a l l e r g y   h a s   b e e n   v e r i f i e d   b y   a   v e r i f i e r .     T h e   d a t a   i n   t h i s   f i e l d \ r w i l l   o n l y   g e t   p u t   i n   p l a c e   i f   t h e   v e r i f i e r   h a s   s i g n e d   o f f   u s i n g   t h e \ r e l e c t r o n i c   s i g n a t u r e .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  v e r i f i c a t i o n _ d a t e _ t i m e  |  2 0  |  V e r i f i c a t i o n   D a t e / t i m e  | {::nomarkdown}  T h e   d a t e / t i m e   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n   h a s   b e e n   v e r i f i e d .  {:/} |  D A T E - T I M E  |  | INDEXED |  | 
|  v e r i f i e r  |  2 1  |  V e r i f i e r  | {::nomarkdown}  T h e   v e r i f i e r   o f   t h e   a l l e r g y / a d v e r s e   r e a c t i o n .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  e n t e r e d _ i n _ e r r o r  |  2 2  |  E n t e r e d   I n   E r r o r  | {::nomarkdown}  I n d i c a t e s   i f   t h i s   a l l e r g y   w a s   e n t e r e d   i n   e r r o r .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
|  d a t e _ t i m e _ e n t e r e d _ i n _ e r r o r  |  2 3  |  D a t e / t i m e   E n t e r e d   I n   E r r o r  | {::nomarkdown}  T h e   d a t e / t i m e   t h e   a l l e r g y / a d v e r s e   r e a c t i o n   w a s   e n t e r e d   i n   e r r o r .  {:/} |  D A T E - T I M E  |  |  |  | 
|  u s e r _ e n t e r i n g _ i n _ e r r o r  |  2 4  |  U s e r   E n t e r i n g   I n   E r r o r  | {::nomarkdown}  T h e   p e r s o n   w h o   e n t e r e d   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n   i n   e r r o r .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  c o m m e n t s  |  2 6  |  C o m m e n t s  | {::nomarkdown}  L i s t   o f   c o m m e n t s   e n t e r e d   a b o u t   t h i s   r e a c t i o n .  {:/} |  [ O B J E C T ]  |  |  | [Comments-120_826](#Comments-120_826)  | 

## <a name="Reactions-120_81"></a>Reactions-120_81 

<dl>
<dt>id</dt><dd> R e a c t i o n s - 1 2 0 _ 8 1 </dd>
<dt>label</dt><dd> R e a c t i o n s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  r e a c t i o n  |  . 0 1  |  R e a c t i o n  | {::nomarkdown}  O n e   o f   t h e   r e a c t i o n s   f o r   t h i s   a l l e r g y / a d v e r s e   r e a c t i o n .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Sign_symptoms-120_83 | 
|  o t h e r _ r e a c t i o n  |  1  |  O t h e r   R e a c t i o n  | {::nomarkdown}  I f   t h i s   r e a c t i o n   c a n n o t   b e   f o u n d   i n   t h e   S i g n / S y m p t o m s   ( 1 2 0 . 8 3 )   f i l e ,   t h e n \ r t h e   f r e e   t e x t   o f   w h a t   t h e   u s e r   t y p e d   i n   w i l l   b e   h e r e ,   a n d   t h e   G M R   R e a c t i o n \ r o f   O T H E R   w i l l   b e   t h e   v a l u e   o f   t h e   N a m e   f i e l d . \ r   \ r O n c e   t h e   S I G N S / S Y M P T O M S   f i l e   i s   s t a n d a r d i z e d   t h e n   t h i s   f i e l d   w i l l \ r n o   l o n g e r   b e   n e e d e d   a s   a l l   e n t r i e s   w i l l   a p p e a r   i n   f i l e   1 2 0 . 8 3   a n d \ r f r e e   t e x t   e n t r i e s   w i l l   n o   l o n g e r   b e   a l l o w e d .  {:/} |  S T R I N G  |  |  |  | 
|  e n t e r e d _ b y  |  2  |  E n t e r e d   B y  | {::nomarkdown}  T h e   p e r s o n   w h o   e n t e r e d   t h i s   r e a c t i o n   i n t o   t h e   s y s t e m .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  d a t e _ e n t e r e d  |  3  |  D a t e   E n t e r e d  | {::nomarkdown}  T h i s   i s   w h e r e   t h e   u s e r   w o u l d   e n t e r   t h e   d a t e   t h a t   t h e   r e a c t i o n \ r ( S i g n / S y m p t o m )   o c c u r r e d   o r   w a s   e n t e r e d   i n t o   t h e   c o m p u t e r .  {:/} |  D A T E - T I M E  |  |  |  | 

## <a name="Chart_Marked-120_813"></a>Chart_Marked-120_813 

<dl>
<dt>id</dt><dd> C h a r t _ M a r k e d - 1 2 0 _ 8 1 3 </dd>
<dt>label</dt><dd> C h a r t   M a r k e d </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d a t e _ t i m e  |  . 0 1  |  D a t e / t i m e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a t e / t i m e   t h e   u s e r   i n d i c a t e d   t o   A R T   t h a t   t h e \ r p a t i e n t ' s   c h a r t   w a s   m a r k e d   f o r   t h i s   r e a c t a n t .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  u s e r _ e n t e r i n g  |  1  |  U s e r   E n t e r i n g  | {::nomarkdown}  T h i s   i s   t h e   u s e r   w h o   i n d i c a t e d   t h a t   t h e   c h a r t   w a s   m a r k e d .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 

## <a name="Id_Band_Marked-120_814"></a>Id_Band_Marked-120_814 

<dl>
<dt>id</dt><dd> I d _ B a n d _ M a r k e d - 1 2 0 _ 8 1 4 </dd>
<dt>label</dt><dd> I d   B a n d   M a r k e d </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d a t e _ t i m e  |  . 0 1  |  D a t e / t i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   t h e   u s e r   i n d i c a t e d   t o   t h e   A T S   t h a t   t h e   p a t i e n t ' s   I D \ r B a n d   w a s   m a r k e d   f o r   t h i s   r e a c t a n t .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  u s e r _ e n t e r i n g  |  1  |  U s e r   E n t e r i n g  | {::nomarkdown}  T h i s   i s   t h e   u s e r   w h o   i n d i c a t e d   t h e   I D   b a n d   w a s   m a r k e d .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 

## <a name="Comments-120_826"></a>Comments-120_826 

<dl>
<dt>id</dt><dd> C o m m e n t s - 1 2 0 _ 8 2 6 </dd>
<dt>label</dt><dd> C o m m e n t s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d a t e _ t i m e _ c o m m e n t _ e n t e r e d  |  . 0 1  |  D a t e / t i m e   C o m m e n t   E n t e r e d  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   d a t e / t i m e   t h i s   c o m m e n t   w a s   e n t e r e d .     T h i s   f i e l d   i s \ r a u t o m a t i c a l l y   f i l l e d   b y   t h e   s y s t e m   w h e n   a   u s e r   e n t e r s   a   c o m m e n t .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  u s e r _ e n t e r i n g  |  1  |  U s e r   E n t e r i n g  | {::nomarkdown}  T h i s   f i e l d   t r a c k s   t h e   u s e r   w h o   e n t e r e d   t h i s   c o m m e n t .     T h e   f i e l d   i s \ r a u t o m a t i c a l l y   s t u f f e d   w h e n   t h a t   u s e r   e n t e r s   a   c o m m e n t .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  c o m m e n t _ t y p e  |  1 . 5  |  C o m m e n t   T y p e  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   t h e   t y p e   o f   c o m m e n t s .   I f   t h i s   f i e l d   i s \ r a n s w e r e d   \  V \  ,   t h e n   t h e s e   c o m m e n t s   a r e   v e r i f i e r   e n t e r e d .     I f   t h i s   f i e l d   i s \ r a n s w e r e d   \  O \  ,   t h e n   t h e s e   a r e   o b s e r v e r   c o m m e n t s .     I f   t h i s   f i e l d   i s   a n s w e r e d \ r \  E \  ,   t h e n   t h e s e   a r e   e n t e r e d   i n   e r r o r   c o m m e n t s .  {:/} |  E N U M E R A T I O N  |  | INDEXED | {::nomarkdown}<dl><dt>O</dt><dd>OBSERVED</dd><dt>E</dt><dd>ERRORED</dd><dt>V</dt><dd>VERIFIED</dd></dl>{:/} | 
|  c o m m e n t s  |  2  |  C o m m e n t s  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   c o m m e n t s   t h a t   w e r e   e n t e r e d . \ r                                                                                         \ r                                                                                              {:/} |  S T R I N G  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}