---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrv_Vital_Category-120_53 

<dl>
<dt>id</dt><dd> G m r v _ V i t a l _ C a t e g o r y - 1 2 0 _ 5 3 </dd>
<dt>fmId</dt><dd> 1 2 0 . 5 3 </dd>
<dt>label</dt><dd> G m r v   V i t a l   C a t e g o r y </dd>
<dt>location</dt><dd> ^ G M R D ( 1 2 0 . 5 3 , </dd>
<dt>description</dt><dd>  P e r   V H A   D i r e c t i v e   { p e n d i n g   d i r e c t i v e   # } ,   t h i s   f i l e   h a s   b e e n   \  l o c k e d   d o w n \    \ r b y   D a t a   S t a n d a r d i z a t i o n   ( D S ) .   T h e   f i l e   d e f i n i t i o n   ( i . e .   d a t a   d i c t i o n a r y )   \ r s h a l l   n o t   b e   m o d i f i e d .   A l l   a d d i t i o n s ,   c h a n g e s   a n d   d e l e t i o n s   t o   e n t r i e s   i n \ r t h e   f i l e   s h a l l   b e   d o n e   b y   E n t e r p r i s e   R e f e r e n c e   T e r m i n o l o g y   ( E R T )   u s i n g   t h e \ r M a s t e r   F i l e   S e r v e r   ( M F S ) ,   p r o v i d e d   b y   C o m m o n   S e r v i c e s   ( C S ) .   C r e a t i n g \ r a n d / o r   e d i t i n g   l o c a l l y   d e f i n e d   f i e l d s   i n   t h e   f i l e   a r e   n o t   p e r m i t t e d .   U s e \ r o f   l o c a l l y   d e f i n e d   f i e l d s   t h a t   w e r e   c r e a t e d   p r i o r   t o   V H A   D i r e c t i v e \ r { p e n d i n g   d i r e c t i v e   # }   s h a l l   n o t   b e   s u p p o r t e d . \ r   \ r T h i s   f i l e   c o n t a i n s   a   l i s t   o f   q u a l i t i e s   o r   c h a r a c t e r i s t i c s   t h a t   c a n   b e   \ r a f f i x e d   t o   a   v i t a l   m e a s u r e m e n t .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  c a t e g o r y  |  . 0 1  |  C a t e g o r y  | {::nomarkdown}  T h i s   f i e l d   p r o v i d e s   a   l i s t   o f   q u a l i t i e s   t h a t   c o u l d   b e   a s s i g n e d   t o   a   g i v e n   \ r v i t a l   m e a s u r e m e n t   r e c o r d .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  v i t a l _ t y p e  |  1  |  V i t a l   T y p e  | {::nomarkdown}  T h i s   m u l t i p l e   s c r e e n s   t h e   p o s s i b l e   q u a l i t y   e n t r i e s   f o r   a   g i v e n   v i t a l   \ r m e a s u r e m e n t   r e c o r d .  {:/} |  [ O B J E C T ]  |  |  | [Vital_Type-120_531](#Vital_Type-120_531)  | 
|  m a s t e r _ e n t r y _ f o r _ v u i d  |  9 9 . 9 8  |  M a s t e r   E n t r y   F o r   V U I D  | {::nomarkdown}  T h i s   f i e l d   i d e n t i f i e s   t h e   M a s t e r   e n t r y   f o r   a   V U I D   a s s o c i a t e d   w i t h   a   \ r T e r m / C o n c e p t .  {:/} |  B O O L E A N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  v u i d  |  9 9 . 9 9  |  V U I D  | {::nomarkdown}  V H A   U n i q u e   I D   ( V U I D ) .   A   u n i q u e   m e a n i n g l e s s   i n t e g e r   a s s i g n e d   t o   r e f e r e n c e \ r t e r m s   V H A   w i d e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  e f f e c t i v e _ d a t e _ t i m e  |  9 9 . 9 9 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  D e s c r i b e s   t h e   p a i r   S t a t u s   a n d   E f f e c t i v e   D a t e / T i m e   f o r   e a c h   r e f e r e n c e   t e r m .  {:/} |  [ O B J E C T ]  |  |  | [Effective_Date_time-120_5399](#Effective_Date_time-120_5399)  | 

## <a name="Vital_Type-120_531"></a>Vital_Type-120_531 

<dl>
<dt>id</dt><dd> V i t a l _ T y p e - 1 2 0 _ 5 3 1 </dd>
<dt>label</dt><dd> V i t a l   T y p e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  v i t a l _ t y p e  |  . 0 1  |  V i t a l   T y p e  | {::nomarkdown}  T h i s   f i e l d   s c r e e n s   t h e   v i t a l   m e a s u r e m e n t   q u a l i t y   f i e l d   i n   t h e   G M R V   V I T A L   \ r M E A S U R E M E N T   f i l e   ( # 1 2 0 . 5 ) .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Gmrv_Vital_Type-120_51 | 
|  m a x i m u m _ e n t r i e s  |  . 0 3  |  M a x i m u m   E n t r i e s  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   t h e   m i n i m u m   n u m b e r   o f   c h a r a c t e r i s t i c s   t h a t   c a n \ r b e   s e l e c t e d   f o r   a   p a t i e n t   f o r   t h i s   c a t e g o r y   f o r   t h i s   v i t a l   t y p e .  {:/} |  N U M E R I C  |  |  |  | 
|  p r i n t _ o r d e r  |  . 0 5  |  P r i n t   O r d e r  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   o r d e r   i n   w h i c h   t h i s   c a t e g o r y   o f   c h a r a c t e r i s t i c s \ r w i l l   d i s p l a y   o n   r e p o r t s   f o r   t h i s   c a t e g o r y   f o r   t h i s   v i t a l   t y p e .  {:/} |  N U M E R I C  |  |  |  | 
|  e d i t _ o r d e r  |  . 0 6  |  E d i t   O r d e r  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   o r d e r   i n   w h i c h   t h i s   c a t e g o r y   f o r   t h i s   v i t a l   t y p e \ r w i l l   b e   e n t e r e d / e d i t e d   i n   t h e   V i t a l s / M e a s u r e m e n t s   e d i t   o p t i o n s .  {:/} |  N U M E R I C  |  |  |  | 
|  d e f a u l t _ q u a l i f i e r  |  . 0 7  |  D e f a u l t   Q u a l i f i e r  | {::nomarkdown}  T h i s   f i e l d   w i l l   d e n o t e   t h e   d e f a u l t   q u a l i f i e r   t o   b e   u s e d   i f   t h e   u s e r \ r d o e s   n o t   s p e c i f y   o n e   d u r i n g   d a t a   e n t r y .  {:/} |  P O I N T E R  |  |  | Gmrv_Vital_Qualifier-120_52 | 

## <a name="Effective_Date_time-120_5399"></a>Effective_Date_time-120_5399 

<dl>
<dt>id</dt><dd> E f f e c t i v e _ D a t e _ t i m e - 1 2 0 _ 5 3 9 9 </dd>
<dt>label</dt><dd> E f f e c t i v e   D a t e / t i m e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e f f e c t i v e _ d a t e _ t i m e  |  . 0 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   w h e n   t h e   S t a t u s   o f   t h e   r e f e r e n c e   t e r m   w a s   \ r e s t a b l i s h e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s t a t u s  |  . 0 2  |  S t a t u s  | {::nomarkdown}  T h e   S t a t u s   o f   a   r e f e r e n c e   t e r m   i s   e i t h e r   ' A C T I V E '   o r   ' I N A C T I V E ' .   I f   \ r ' A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   b e   a c c e s s i b l e   b y   e n d - u s e r s   t o   d o c u m e n t   a   \ r p a r t i c u l a r   p a t i e n t   e v e n t .   I f   ' I N A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   o n l y   b e   \ r a c c e s s i b l e   b y   t h e   a p p l i c a t i o n   t o   d i s p l a y   l e g a c y   d a t a .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}