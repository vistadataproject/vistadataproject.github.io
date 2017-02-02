---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Cmop_System-550 

<dl>
<dt>id</dt><dd> C m o p _ S y s t e m - 5 5 0 </dd>
<dt>fmId</dt><dd> 5 5 0 </dd>
<dt>label</dt><dd> C m o p   S y s t e m </dd>
<dt>location</dt><dd> ^ P S X ( 5 5 0 , </dd>
<dt>description</dt><dd>  T h e   s y s t e m   p a r a m e t e r s   i n   t h i s   f i l e   m a n a g e   o p e r a t i o n s   o f   t h e   C o n s o l i d a t e d   \ r M a i l   O u t p a t i e n t   P h a r m a c y   f o r   t h e   m e d i c a l   c e n t e r .   T h i s   i n f o r m a t i o n   c o n t r o l s \ r t h e   t r a n s m i s s i o n   o f   d a t a   t o   t h e   C o n s o l i d a t e d   M a i l   O u t p a t i e n t   P h a r m a c y \ r h o s t   f a c i l i t y   s e l e c t e d   b y   t h e   m e d i c a l   c e n t e r .   I n f o r m a t i o n   i n   t h i s   f i l e   \ r m u s t   b e   e n t e r e d   o r   e d i t e d   O N L Y   t h r o u g h   t h e   C o n s o l i d a t e d   M a i l   O u t p a t i e n t   \ r P h a r m a c y   p a c k a g e   o p t i o n s .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  s y s t e m  |  . 0 1  |  S y s t e m  | {::nomarkdown}  T h i s   i s   t h e   f r e e   t e x t   n a m e   o f   t h e   C M O P   s y s t e m .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  s t a t u s  |  1  |  S t a t u s  | {::nomarkdown}  T h e   c u r r e n t   p r o c e s s i n g   s t a t u s   o f   t h i s   f a c i l i t y .     A C T I V E   \ r s t a t u s   i n d i c a t e s   t h e   f a c i l i t y   i s   p a r t i c i p a t i n g   i n   t r a n s m i t t i n g   d a t a \ r t o   t h e   C M O P .     I N A C T I V E   s t a t u s   i n d i c a t e s   t h a t   C M O P   p r o c e s s i n g   i s   n o t   \ r c u r r e n t l y   a v a i l a b l e . \ r   ' N '   f o r   ' A c t i v e   N o n - C S   o n l y ' \ r   ' C '   f o r   ' A c t i v e   C S   o n l y ' \ r   ' B '   f o r   ' A c t i v e   b o t h   C S   a n d   N o n - C S '  {:/} |  E N U M E R A T I O N  |  | INDEXED | {::nomarkdown}<dl><dt>A</dt><dd>ACTIVE</dd><dt>I</dt><dd>INACTIVE</dd></dl>{:/} | 
|  x m i t _ s t a t u s  |  2  |  X m i t   S t a t u s  | {::nomarkdown}    \ r T h i s   f i e l d   c o n t a i n s   a   s e t   o f   c o d e s   i n d i c a t i n g   t h e   c u r r e n t   s t a t u s   o f   t h e \ r j o b   w h i c h   t r a n s m i t s   d a t a   t o   t h e   C M O P .     O n l y   o n e   t r a n s m i s s i o n   m a y   p r o c e s s \ r a t   a   g i v e n   t i m e .  {:/} |  E N U M E R A T I O N  |  | INDEXED | {::nomarkdown}<dl><dt>R</dt><dd>DATA RECOVERY </dd><dt>H</dt><dd>NO CURRENT TRANSMISSION</dd><dt>T</dt><dd>TRANSMITTING DATA</dd></dl>{:/} | 
|  c m o p _ d o m a i n  |  3  |  C m o p   D o m a i n  | {::nomarkdown}  T h i s   i s   a   v a l i d   M a i l M a n   d o m a i n   f o r   t h e   C o n s o l i d a t e d   M a i l   O u t p a t i e n t \ r P h a r m a c y   s y s t e m   r e c e i v i n g   t h e   f a c i l i t y - t r a n s m i t t e d   d a t a .  {:/} |  P O I N T E R  |  | REQUIRED | Domain-4_2 | 
|  a c t i v a t e _ i n a c t i v a t e _ d t _ t m  |  4  |  A c t i v a t e / i n a c t i v a t e   D t / t m  | {::nomarkdown}  T h e   d a t e / t i m e   o f   t h e   A c t i v a t e / I n a c t i v a t e   a c t i o n .  {:/} |  [ O B J E C T ]  |  |  | [Activate_inactivate_Dt_tm-550_04](#Activate_inactivate_Dt_tm-550_04)  | 
|  l a s t _ b a t c h _ t r a n s m i t t e d  |  6  |  L a s t   B a t c h   T r a n s m i t t e d  | {::nomarkdown}  T h e   b a t c h   n u m b e r   o f   t h e   l a s t   c o m p l e t e d   t r a n s m i s s i o n .  {:/} |  P O I N T E R  |  |  | Cmop_Transmission-550_2 | 
|  a u t o _ t r a n s m i t  |  7  |  A u t o   T r a n s m i t  |  |  [ O B J E C T ]  |  |  | [Auto_Transmit-550_07](#Auto_Transmit-550_07)  | 
|  p u r g e _ d t _ t m  |  8  |  P u r g e   D t / t m  |  |  [ O B J E C T ]  |  |  | [Purge_Dt_tm-550_08](#Purge_Dt_tm-550_08)  | 
|  t a s k _ n u m b e r  |  9  |  T a s k   N u m b e r  | {::nomarkdown}  T h e   t a s k   n u m b e r   o f   t h e   c u r r e n t l y   r u n n i n g   t r a n s m i s s i o n   j o b .  {:/} |  N U M E R I C  |  | INDEXED |  | 
|  a u t o _ t r a n s m i t _ c s  |  1 0  |  A u t o   T r a n s m i t   C s  | {::nomarkdown}  T h i s   m u l t i p l e   i s   u s e d   t o   t r a c k   a n d   c o n t r o l   t h e   b a c k g r o u n d   j o b s   t h a t \ r g a t h e r   a n d   t r a n s m i t   C M O P   c o n t r o l l e d   s u b s t a n c e   p r e s c r i p t i o n   t r a n s m i s s i o n s .  {:/} |  [ O B J E C T ]  |  |  | [Auto_Transmit_Cs-550_09](#Auto_Transmit_Cs-550_09)  | 
|  n o n c s _ d a y s _ t o _ t r a n s m i t  |  1 1  |  N o n - c s   D a y s   T o   T r a n s m i t  | {::nomarkdown}  T h e   n u m b e r   o f   d a y s   i n t o   t h e   f u t u r e   t h e   N O N - C S   p r o c e s s   w i l l   l o o k   t o   p i c k   u p \ r p r e s c r i p t i o n s   f o r   a   p a t i e n t   a l r e a d y   i n   t h e   t r a n s m i s s i o n .  {:/} |  N U M E R I C  |  |  |  | 
|  c s _ d a y s _ t o _ t r a n s m i t  |  1 2  |  C s   D a y s   T o   T r a n s m i t  | {::nomarkdown}  T h e   n u m b e r   o f   d a y s   i n t o   t h e   f u t u r e   t h e   C S   p r o c e s s   w i l l   l o o k   t o   p i c k   u p \ r p r e s c r i p t i o n s   f o r   a   p a t i e n t   a l r e a d y   i n   t h e   t r a n s m i s s i o n .  {:/} |  N U M E R I C  |  |  |  | 

## <a name="Activate_inactivate_Dt_tm-550_04"></a>Activate_inactivate_Dt_tm-550_04 

<dl>
<dt>id</dt><dd> A c t i v a t e _ i n a c t i v a t e _ D t _ t m - 5 5 0 _ 0 4 </dd>
<dt>label</dt><dd> A c t i v a t e / i n a c t i v a t e   D t / t m </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a c t i v a t e _ i n a c t i v a t e _ d t _ t m  |  . 0 1  |  A c t i v a t e / i n a c t i v a t e   D t / t m  | {::nomarkdown}  T h e   d a t e / t i m e   o f   t h e   A c t i v a t e / I n a c t i v a t e   a c t i o n . \ r    {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  i n i t i a t o r  |  1  |  I n i t i a t o r  | {::nomarkdown}  T h e   p e r s o n   i n i t i a t i n g   t h i s   a c t i o n .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  c m o p _ r e s p o n s e _ d t _ t m  |  2  |  C m o p   R e s p o n s e   D t / t m  | {::nomarkdown}  T h e   d a t e / t i m e   t h e   C M O P   r e s p o n d e d   t o   t h e   r e q u e s t   o r   n o t i f i c a t i o n .  {:/} |  D A T E - T I M E  |  |  |  | 
|  c m o p _ r e s p o n s e  |  3  |  C m o p   R e s p o n s e  | {::nomarkdown}  T h i s   f i e l d   d e s c r i b e s   t h e   C M O P   r e s p o n s e   t o   t h e   r e q u e s t   o r   n o t i f i c a t i o n .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>D</dt><dd>DISAPPROVED</dd><dt>N</dt><dd>NOTIFICATION RECEIVED</dd><dt>A</dt><dd>APPROVED</dd><dt>P</dt><dd>PENDING</dd></dl>{:/} | 
|  a c t i o n _ t y p e  |  4  |  A c t i o n   T y p e  | {::nomarkdown}  T h e   t y p e   o f   a c t i o n   ( A c t i v a t e / I n a c t i v a t e )   f o r   t h i s   e n t r y .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>I</dt><dd>INACTIVATION NOTICE</dd><dt>A</dt><dd>ACTIVATION REQUEST</dd></dl>{:/} | 
|  r e m o t e _ i n i t i a t o r  |  5  |  R e m o t e   I n i t i a t o r  | {::nomarkdown}  N a m e   o f   t h e   C M O P   p e r s o n   w h o   s e n t   t h e   m e s s a g e .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Auto_Transmit-550_07"></a>Auto_Transmit-550_07 

<dl>
<dt>id</dt><dd> A u t o _ T r a n s m i t - 5 5 0 _ 0 7 </dd>
<dt>label</dt><dd> A u t o   T r a n s m i t </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a u t o _ t r a n s m i t  |  . 0 1  |  A u t o   T r a n s m i t  | {::nomarkdown}  A   ' 1 '   i n   t h i s   f i e l d   i n d i c a t e s   t h e   f a c i l i t y   h a s   c u r r e n t l y   s c h e d u l e d \ r b a c k g r o u n d   t r a n s m i s s i o n s   f o r   C M O P   p r o c e s s i n g .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>NO</dd></dl>{:/} | 
|  q u e u e d _ t o _ b e g i n  |  1  |  Q u e u e d   T o   B e g i n  | {::nomarkdown}  T h e   d a t e / t i m e   o f   t h e   i n i t i a l   b a c k g r o u n d   t r a n s m i s s i o n .  {:/} |  D A T E - T I M E  |  |  |  | 
|  s c h e d u l i n g _ f r e q u e n c y h r s  |  2  |  S c h e d u l i n g   F r e q u e n c y ( h r s )  | {::nomarkdown}  T h i s   i s   t h e   f r e q u e n c y   ( i n   h o u r s )   t h a t   t h e   a u t o m a t i c   p r o c e s s i n g   w i l l   b e \ r r e s c h e d u l e d .  {:/} |  N U M E R I C  |  |  |  | 
|  n e x t _ t r a n s m i s s i o n _ t i m e  |  3  |  N e x t   T r a n s m i s s i o n   T i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   o f   t h e   n e x t   s c h e d u l e d   a u t o   t r a n s m i s s i o n .  {:/} |  D A T E - T I M E  |  |  |  | 
|  s c h e d u l e d _ b y  |  5  |  S c h e d u l e d   B y  | {::nomarkdown}  T h e   n a m e   o f   t h e   p e r s o n   w h o   s c h e d u l e d   t h e   a u t o m a t i c   p r o c e s s i n g .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  t a s k _ n u m b e r  |  6  |  T a s k   N u m b e r  | {::nomarkdown}  T h i s   i s   t h e   t a s k   n u m b e r   u s e d   t o   r e s c h e d u l e   t h e   j o b .  {:/} |  N U M E R I C  |  |  |  | 
|  n u m b e r _ o f _ d a y s _ t o _ t r a n s m i t  |  7  |  N u m b e r   O f   D a y s   T o   T r a n s m i t  | {::nomarkdown}  T h i s   n u m b e r   d e t e r m i n e s   t h e   n u m b e r   o f   d a y s   t o   a d d   t o   t h e   c u r r e n t   d a t e   t o \ r c a l c u l a t e   t h e   t r a n s m i t   t h r o u g h   d a t e   f o r   C M O P   a u t o   t r a n s m i s s i o n s .  {:/} |  N U M E R I C  |  |  |  | 

## <a name="Purge_Dt_tm-550_08"></a>Purge_Dt_tm-550_08 

<dl>
<dt>id</dt><dd> P u r g e _ D t _ t m - 5 5 0 _ 0 8 </dd>
<dt>label</dt><dd> P u r g e   D t / t m </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  p u r g e _ d t _ t m  |  . 0 1  |  P u r g e   D t / t m  | {::nomarkdown}  D a t e / t i m e   t h e   l a s t   p u r g e   b y   t h e   C M O P   b a c k g r o u n d   m a n a g e r   w a s   c o m p l e t e d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  t o t a l _ o r d e r s _ p u r g e d  |  1  |  T o t a l   O r d e r s   P u r g e d  | {::nomarkdown}  T h i s   i s   t h e   t o t a l   r e c o r d s   p u r g e d   f r o m   t h e   P S X ( 5 0 1   g l o b a l .  {:/} |  N U M E R I C  |  |  |  | 
|  s t a r t _ s e q _ n u m b e r  |  3  |  S t a r t   S e q   #  | {::nomarkdown}    \ r T h e   s t a r t i n g   m e s s a g e   n u m b e r   o f   t h e   d a t a   t r a n s m i s s i o n .  {:/} |  N U M E R I C  |  |  |  | 
|  e n d _ s e q _ n u m b e r  |  4  |  E n d   S e q   #  | {::nomarkdown}    \ r T h e   l a s t   m e s s a g e   n u m b e r   o f   t h e   d a t a   t r a n s m i s s i o n .  {:/} |  N U M E R I C  |  |  |  | 

## <a name="Auto_Transmit_Cs-550_09"></a>Auto_Transmit_Cs-550_09 

<dl>
<dt>id</dt><dd> A u t o _ T r a n s m i t _ C s - 5 5 0 _ 0 9 </dd>
<dt>label</dt><dd> A u t o   T r a n s m i t   C s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a u t o _ t r a n s m i t _ c s  |  . 0 1  |  A u t o   T r a n s m i t   C s  | {::nomarkdown}  A   ' 1 '   i n   t h i s   f i e l d   i n d i c a t e s   t h e   f a c i l i t y   h a s   c u r r e n t l y   s c h e d u l e d \ r b a c k g r o u n d   c o n t r o l l e d   s u b s t a n c e s   t r a n s m i s s i o n s   f o r   C M O P   p r o c e s s i n g .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>NO</dd></dl>{:/} | 
|  q u e u e d _ t o _ b e g i n  |  1  |  Q u e u e d   T o   B e g i n  | {::nomarkdown}  T h e   d a t e / t i m e   o f   t h e   i n i t i a l   b a c k g r o u n d   c o n t r o l l e d   s u b s t a n c e s \ r t r a n s m i s s i o n .  {:/} |  D A T E - T I M E  |  |  |  | 
|  s c h e d u l i n g _ f r e q u e n c y _ h r s  |  2  |  S c h e d u l i n g   F r e q u e n c y   ( h r s )  | {::nomarkdown}  T h i s   i s   t h e   f r e q u e n c y   ( i n   h o u r s )   t h a t   t h e   a u t o m a t i c   p r o c e s s i n g   w i l l   b e \ r r e s c h e d u l e d .  {:/} |  N U M E R I C  |  |  |  | 
|  n e x t _ t r a n s m i s s i o n _ t i m e  |  3  |  N e x t   T r a n s m i s s i o n   T i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e / t i m e   o f   t h e   n e x t   s c h e d u l e d   a u t o   t r a n s m i s s i o n .  {:/} |  D A T E - T I M E  |  | REQUIRED |  | 
|  s c h e d u l e d _ b y  |  5  |  S c h e d u l e d   B y  | {::nomarkdown}  T h e   n a m e   o f   t h e   p e r s o n   w h o   s c h e d u l e d   t h e   a u t o m a t i c   p r o c e s s i n g .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  t a s k _ n u m b e r  |  6  |  T a s k   N u m b e r  | {::nomarkdown}  T h i s   i s   t h e   t a s k   n u m b e r   u s e d   t o   r e s c h e d u l e   t h e   j o b .  {:/} |  N U M E R I C  |  |  |  | 
|  n u m b e r _ o f _ d a y s _ t o _ t r a n s m i t  |  7  |  N u m b e r   O f   D a y s   T o   T r a n s m i t  | {::nomarkdown}  T h i s   n u m b e r   d e t e r m i n e s   t h e   n u m b e r   o f   d a y s   t o   a d d   t o   t h e   c u r r e n t   d a t e   t o \ r c a l c u l a t e   t h e   t r a n s m i t   t h r o u g h   d a t e   f o r   C M O P   a u t o   t r a n s m i s s i o n s .  {:/} |  N U M E R I C  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}