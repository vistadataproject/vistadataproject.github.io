---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Sign_symptoms-120_83 

<dl>
<dt>id</dt><dd> S i g n _ s y m p t o m s - 1 2 0 _ 8 3 </dd>
<dt>fmId</dt><dd> 1 2 0 . 8 3 </dd>
<dt>label</dt><dd> S i g n / s y m p t o m s </dd>
<dt>location</dt><dd> ^ G M R D ( 1 2 0 . 8 3 , </dd>
<dt>description</dt><dd>  A   l i s t i n g   o f   p o s s i b l e   a l l e r g i c   r e a c t i o n s . \ r   \ r P e r   V H A   d i r e c t i v e   X X X ,   t h i s   f i l e   h a s   b e e n   \  l o c k e d   d o w n \    b y   D a t a \ r S t a n d a r d i z a t i o n   ( D S ) .     T h e   f i l e   d e f i n i t i o n   ( i . e .   d a t a   d i c t i o n a r y )   s h a l l \ r n o t   b e   m o d i f i e d .     A l l   a d d i t i o n s ,   c h a n g e s   a n d   d e l e t i o n s   t o   e n t r i e s   i n   t h e \ r f i l e   s h a l l   b e   d o n e   b y   E n t e r p r i s e   R e f e r e n c e   T e r m i n o l o g y   ( E R T )   u s i n g   t h e \ r M a s t e r   F i l e   S e r v e r   ( M F S ) ,   p r o v i d e d   b y   C o m m o n   S e r v i c e s   ( C S ) .     C r e a t i n g \ r a n d / o r   e d i t i n g   l o c a l l y   d e f i n e d   f i e l d s   i n   t h e   f i l e   a r e   n o t   p e r m i t t e d .     U s e \ r o f   l o c a l l y   d e f i n e d   f i e l d s   t h a t   w e r e   c r e a t e d   p r i o r   t o   V H A   D i r e c t i v e   X X X \ r s h a l l   n o t   b e   s u p p o r t e d .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  A   s i g n / s y m p t o m   t h a t   c a n   b e   a s s o c i a t e d   w i t h   a n   a l l e r g y .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  n a t i o n a l _ s i g n _ s y m p t o m  |  1  |  N a t i o n a l   S i g n / s y m p t o m  | {::nomarkdown}  I n d i c a t e s   w h e t h e r   t h i s   s i g n / s y m p t o m   h a s   b e e n   r e l e a s e d   w i t h   t h e   n a t i o n a l \ r p a c k a g e   o r   h a s   b e e n   a d d e d   l o c a l l y .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>NATIONAL SIGN/SYMPTOM</dd></dl>{:/} | 
|  s y n o n y m  |  2  |  S y n o n y m  | {::nomarkdown}  A   l i s t   o f   s y n o n y m s   t h a t   c a n   a l s o   b e   u s e d   t o   l o o k   u p   t h i s   s i g n / s y m p t o m .  {:/} |  [ S T R I N G ]  |  |  |  | 
|  m a s t e r _ e n t r y _ f o r _ v u i d  |  9 9 . 9 8  |  M a s t e r   E n t r y   F o r   V U I D  | {::nomarkdown}  T h i s   f i e l d   i d e n t i f i e s   t h e   M a s t e r   e n t r y   f o r   a   V U I D   a s s o c i a t e d   w i t h \ r a   T e r m / C o n c e p t .  {:/} |  B O O L E A N  |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  v u i d  |  9 9 . 9 9  |  V U I D  | {::nomarkdown}  V H A   U n i q u e   I D   ( V U I D ) .     A   u n i q u e   m e a n i n g l e s s   i n t e g e r   a s s i g n e d   t o \ r r e f e r e n c e   t e r m s   V H A   w i d e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  e f f e c t i v e _ d a t e _ t i m e  |  9 9 . 9 9 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  D e s c r i b e s   t h e   p a i r   s t a t u s   a n d   e f f e c t i v e   d a t e / t i m e   f o r   e a c h \ r r e f e r e n c e   t e r m .  {:/} |  [ O B J E C T ]  |  |  | [Effective_Date_time-120_8399](#Effective_Date_time-120_8399)  | 

## <a name="Effective_Date_time-120_8399"></a>Effective_Date_time-120_8399 

<dl>
<dt>id</dt><dd> E f f e c t i v e _ D a t e _ t i m e - 1 2 0 _ 8 3 9 9 </dd>
<dt>label</dt><dd> E f f e c t i v e   D a t e / t i m e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e f f e c t i v e _ d a t e _ t i m e  |  . 0 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   w h e n   t h e   s t a t u s   o f   t h e   r e f e r e n c e   t e r m   w a s \ r e s t a b l i s h e d  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s t a t u s  |  . 0 2  |  S t a t u s  | {::nomarkdown}  T h e   s t a t u s   o f   a   r e f e r e n c e   t e r m   i s   e i t h e r   ' A C T I V E '   o r   ' I N A C T I V E ' .     I f \ r ' A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   b e   a c c e s s i b l e   b y   e n d - u s e r s   t o   \ r d o c u m e n t   a   p a r t i c u l a r   p a t i e n t   e v e n t .     I f   ' I N A C T I V E ' ,   t h e n   t h e   t e r m   w i l l \ r o n l y   b e   a c c e s s i b l e   b y   t h e   a p p l i c a t i o n   t o   d i s p l a y   l e g a c y   d a t a .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}