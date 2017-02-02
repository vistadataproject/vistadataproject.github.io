---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Institution-4 

<dl>
<dt>id</dt><dd> I n s t i t u t i o n - 4 </dd>
<dt>fmId</dt><dd> 4 </dd>
<dt>label</dt><dd> I n s t i t u t i o n </dd>
<dt>location</dt><dd> ^ D I C ( 4 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   a   l i s t i n g   o f   V A   i n s t i t u t i o n s .     I t   i s   c r o s s - r e f e r e n c e d \ r b y   n a m e   a n d   s t a t i o n   n u m b e r .     T h e   N u m b e r   f i e l d   i s   n o   l o n g e r   m e a n i n g f u l   ( i t \ r h a d   p r e v i o u s l y   r e f e r e n c e d   t h e   s t a t i o n   n u m b e r ) .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   t h e   n a m e   o f   t h e   i n s t i t u t i o n   w i t h   o u t   m o d i f i e r s   l i k e   s t a t e \ r o r   t y p e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  s t a t e  |  . 0 2  |  S t a t e  | {::nomarkdown}  S t a t e   t h a t   t h e   i n s t i t u t i o n   i s   p h y s i c a l l y   l o c a t e d .  {:/} |  P O I N T E R  |  |  | State-5 | 
|  d i s t r i c t  |  . 0 3  |  D i s t r i c t  | {::nomarkdown}  T h i s   i s   t h e   M e d i c a l   D i s t r i c t   o f   t h e   I n s t i t u t i o n   f i l e .     T h e r e f o r e   i t   i s   n o t \ r t o   b e   c h a n g e d   e x c e p t   b y   a p p r o p r i a t e l y   k n o w l e d g e a b l e   i n d i v i d u a l s .  {:/} |  N U M E R I C  |  |  |  | 
|  s h o r t _ n a m e  |  . 0 5  |  S h o r t   N a m e  | {::nomarkdown}  S h o r t   v e r s i o n   o f   n a m e .  {:/} |  S T R I N G  |  |  |  | 
|  v a _ t y p e _ c o d e  |  . 0 6  |  V A   T y p e   C o d e  | {::nomarkdown}  T h i s   f i e l d   i s   b e i n g   r e p l a c e d   b y   t h e   F a c i t i l y   t y p e   f i e l d .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>NH</dt><dd>NH</dd><dt>PC</dt><dd>PROTH</dd><dt>MCDMNH</dt><dd>MC,DOM,NH</dd><dt>DM</dt><dd>DOM</dd><dt>MCDM</dt><dd>MC&DOM</dd><dt>OS</dt><dd>OC-SUB</dd><dt>OI</dt><dd>OC-IND</dd><dt>MCRO</dt><dd>MC&RO</dd><dt>RODP</dt><dd>RO&DPC</dd><dt>CR</dt><dd>VACO-RO</dd><dt>OM</dt><dd>OC-UNDER MMT</dd><dt>RP</dt><dd>RPC</dd><dt>DP</dt><dd>DPC</dd><dt>CO</dt><dd>VACO</dd><dt>MC</dt><dd>HOSP</dd><dt>RO</dt><dd>RO</dd><dt>PD</dt><dd>PDC</dd><dt>MCNH</dt><dd>MC&NH</dd></dl>{:/} | 
|  r e g i o n  |  . 0 7  |  R e g i o n  | {::nomarkdown}  V A   r e g i o n   n u m b e r .  {:/} |  N U M E R I C  |  |  |  | 
|  s t r e e t _ a d d r _ 1  |  1 . 0 1  |  S t r e e t   A d d r .   1  | {::nomarkdown}  F i r s t   l i n e   o f   t h e   s t r e e t   a d d r e s s   ( p h y s i c a l )   o f   t h e   f a c i l i t y .  {:/} |  S T R I N G  |  |  |  | 
|  s t r e e t _ a d d r _ 2  |  1 . 0 2  |  S t r e e t   A d d r .   2  | {::nomarkdown}  S e c o n d   l i n e   o f   s t r e e t   a d d r e s s   ( p h y s i c a l )   o f   t h e   f a c i l i t y .  {:/} |  S T R I N G  |  |  |  | 
|  c i t y  |  1 . 0 3  |  C i t y  | {::nomarkdown}  T h e   c i t y   t h e   f a c i l i t y   i s   p h y s i c a l l y   l o c a t e d .  {:/} |  S T R I N G  |  |  |  | 
|  z i p  |  1 . 0 4  |  Z I P  | {::nomarkdown}  P o s t a l   Z I P   c o d e   f o r   t h e   p h y s i c a l   a d d r e s s   o f   t h e   f a c i l i t y .  {:/} |  S T R I N G  |  |  |  | 
|  c o n t a c t  |  4  |  C o n t a c t  | {::nomarkdown}  L i s t   o f   c o n t a c t s .  {:/} |  [ O B J E C T ]  |  |  | [Contact-4_03](#Contact-4_03)  | 
|  s t _ a d d r _ 1 _ m a i l i n g  |  4 . 0 1  |  S t .   A d d r .   1   ( m a i l i n g )  | {::nomarkdown}  F i r s t   l i n e   o f   t h e   s t r e e t   a d d r e s s   ( m a i l i n g )   o f   t h e   f a c i l i t y .  {:/} |  S T R I N G  |  |  |  | 
|  s t _ a d d r _ 2 _ m a i l i n g  |  4 . 0 2  |  S t .   A d d r .   2   ( m a i l i n g )  | {::nomarkdown}  S e c o n d   l i n e   o f   t h e   s t r e e t   a d d r e s s   ( m a i l i n g )   o f   t h e   f a c i l i t y .  {:/} |  S T R I N G  |  |  |  | 
|  c i t y _ m a i l i n g  |  4 . 0 3  |  C i t y   ( m a i l i n g )  | {::nomarkdown}  T h e   C i t y   o f   t h e   f a c i l i t y ' s   m a i l i n g   a d d r e s s .  {:/} |  S T R I N G  |  |  |  | 
|  s t a t e _ m a i l i n g  |  4 . 0 4  |  S t a t e   ( m a i l i n g )  | {::nomarkdown}  T h e   S t a t e   o f   t h e   f a c i l i t y ' s   m a i l i n g   a d d r e s s .  {:/} |  P O I N T E R  |  |  | State-5 | 
|  z i p _ m a i l i n g  |  4 . 0 5  |  Z I P   ( m a i l i n g )  | {::nomarkdown}  P o s t a l   Z I P   c o d e   f o r   t h e   m a i l i n g   a d d r e s s   o f   t h e   f a c i l i t y .  {:/} |  S T R I N G  |  |  |  | 
|  m u l t i d i v i s i o n _ f a c i l i t y  |  5  |  M u l t i - d i v i s i o n   F a c i l i t y  | {::nomarkdown}  F l a g   t o   i n d i c a t e   t h i s   i s   a   m u l t i - d i v i s i o n   f a c i l i t y .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
|  s t a t u s  |  1 1  |  S t a t u s  | {::nomarkdown}  A n   I n s t i t u t i o n   h a s   a   S T A T U S   ( # 1 1 )   o f   e i t h e r   L O C A L   o r   N A T I O N A L . \ r \ r I n a c t i v e   f a c i l i t i e s   a r e   f l a g g e d   a s   s u c h   b y   t h e   f i e l d   I N A C T I V E \ r F A C I L I T Y   F L A G   ( # 1 0 1 ) . \ r \ r N a t i o n a l   e n t r i e s   a r e   f a c i l i t i e s   t h a t   h a v e   a   S T A T I O N   N U M B E R   ( # 9 9 ) \ r a p p r o v e d   b y   I n f o r m a t i o n   M a n a g e m e n t   S e r v i c e   ( 0 4 5 A 4 ) .     N a t i o n a l \ r e n t r i e s   a r e   m a i n t a i n e d   b y   t h e   M a s t e r   F i l e   S e r v e r   l o c a t e d   o n   F O R U M . \ r \ r L o c a l   e n t r i e s   a r e   f a c i l i t i e s   t h a t   a r e   e n t e r e d   l o c a l l y .     L o c a l \ r e n t r i e s   n o   n o t   h a v e   a   S T A T I O N   N U M B E R   ( # 9 9 ) .     ( O n l y   o f f i c a l l y \ r a p p r o v e d   s t a t i o n   n u m b e r s   a r e   a l l o w e d   i n   t h e   S T A T I O N   N U M B E R   ( # 9 9 ) \ r f i e l d . ) \ r \ r A l l   n a t i o n a l   e n t r i e s   w i l l   h a v e   a   S T A T U S   ( # 1 1 )   o f   N A T I O N A L .     D o \ r n o t   e d i t   t h e   S T A T U S   ( # 1 1 )   o f   a   n a t i o n a l   e n t r y .     D o   n o t   s e t   a   L O C A L \ r e n t r y   t o   a   S T A T U S   ( # 1 1 )   o f   N A T I O N A L .  {:/} |  E N U M E R A T I O N  |  | REQUIRED, INDEXED | {::nomarkdown}<dl><dt>N</dt><dd>National</dd><dt>L</dt><dd>Local</dd></dl>{:/} | 
|  f a c i l i t y _ t y p e  |  1 3  |  F a c i l i t y   T y p e  | {::nomarkdown}  T h e   t y p e   o f   f a c i l i t y .   A   r e p l a c e m e n t   f o r   t h e   t y p e   f i e l d .  {:/} |  P O I N T E R  |  |  | Facility_Type-4_1 | 
|  a s s o c i a t i o n s  |  1 4  |  A s s o c i a t i o n s  |  |  [ O B J E C T ]  |  |  | [Associations-4_014](#Associations-4_014)  | 
|  n p i  |  4 1 . 9 9  |  N p i  | {::nomarkdown}  C u r r e n t   U n i q u e   N a t i o n a l   P r o v i d e r   I D .   A   u n i q u e   m e a n i n g l e s s   i n t e g e r   a s s i g n e d \ r t o   p r o v i d e r s .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  e f f e c t i v e _ d a t e _ t i m e  |  4 2  |  E f f e c t i v e   D a t e / t i m e  |  |  [ O B J E C T ]  |  |  | [Effective_Date_time-4_042](#Effective_Date_time-4_042)  | 
|  t a x o n o m y _ c o d e  |  4 3  |  T a x o n o m y   C o d e  |  |  [ O B J E C T ]  |  |  | [Taxonomy_Code-4_043](#Taxonomy_Code-4_043)  | 
|  a c o s _ h o s p i t a l _ i d  |  5 1  |  A c o s   H o s p i t a l   I d  | {::nomarkdown}  T h i s   f i e l d   h o l d s   t h e   s i x - d i g i t   c o d e   a s s i g n e d   t o   t h i s   f a c i l i t y   b y \ r t h e   A m e r i c a n   C o l l e g e   o f   S u r g e o n s   ( A C O S )   C o m m i s s i o n   o n   C a n c e r ,   t h e \ r o r g a n i z a t i o n   t h a t   a c c r e d i t s   a   h o s p i t a l ' s   C a n c e r   P r o g r a m   a n d   T u m o r \ r R e g i s t r y .     A   f a c i l i t y   w i l l   o n l y   h a v e   a n   A C O S   n u m b e r   i f   t h e y   h a v e \ r r e q u e s t e d   a   C a n c e r   P r o g r a m   s u r v e y   f r o m   t h e   A C O S   ( n o t   a l l   f a c i l i t i e s \ r w i l l   h a v e   a   n u m b e r ) .  {:/} |  S T R I N G  |  |  |  | 
|  f a c i l i t y _ d e a _ n u m b e r  |  5 2  |  F a c i l i t y   D e a   N u m b e r  | {::nomarkdown}  T h i s   f i e l d   h o l d s   t h e   f a c i l i t y   D E A   n u m b e r .   T h i s   a l l o w s   h o u s e   o f f i c e r s   w h o   \ r d o   n o t   h a v e   t h e i r   o w n   D E A   #   t o   u s e   a   V A   #   f o r   D i g i t a l   S i g n a t u r e s .  {:/} |  S T R I N G  |  |  |  | 
|  f a c i l i t y _ d e a _ e x p i r a t i o n _ d a t e  |  5 2 . 1  |  F a c i l i t y   D e a   E x p i r a t i o n   D a t e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   e x p i r a t i o n   d a t e   f o r   D E A # .  {:/} |  D A T E - T I M E  |  |  |  | 
|  d o m a i n  |  6 0  |  D o m a i n  | {::nomarkdown}  A   p o i n t e r   t o   t h e   d o m a i n   s o   t h e   i n s t i t u t i o n   c a n   b e   l i n k e d   t o   a   E - m a i l   d o m a i n .  {:/} |  P O I N T E R  |  |  | Domain-4_2 | 
|  a g e n c y _ c o d e  |  9 5  |  A g e n c y   C o d e  | {::nomarkdown}  A   c o d e   t o   i d e n t i f y   t h e   G o v e r n m e n t   a g e n c y   t h a t   t h i s   s i t e   b e l o n g s   t o . \ r T h i s   i s   a   d u p l i c a t e   o f   t h e   P O I N T E R   T O   A G E N C Y   f i e l d .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>V</dt><dd>VA</dd><dt>E</dt><dd>EHR</dd><dt>ARMY</dt><dd>ARMY</dd><dt>I</dt><dd>IHS</dd><dt>AF</dt><dd>AIR FORCE</dd><dt>O</dt><dd>OTHER</dd><dt>N</dt><dd>NAVY</dd><dt>USCG</dt><dd>COAST GUARD</dd></dl>{:/} | 
|  r e p o r t i n g _ s t a t i o n  |  9 6  |  R e p o r t i n g   S t a t i o n  | {::nomarkdown}  T h i s   i s   a   p o i n t e r   b a c k   t o   t h e   I n s t i t u t i o n   f i l e   t h a t   i n d i c a t e s   t h e \ r s i t e   t h a t   d o e s   t h e   r e p o r t i n g   t o   V A C O .  {:/} |  P O I N T E R  |  |  | [Institution-4](Institution-4.md) | 
|  p o i n t e r _ t o _ a g e n c y  |  9 7  |  P o i n t e r   T o   A g e n c y  | {::nomarkdown}  A   p o i n t e r   t o   a   f i l e   t h a t   i d e n t i f i e s   t h e   g o v e r n m e n t   a g e n c y   t h a t \ r t h i s   s i t e   b e l o n g s   t o .     K e e p   i n   s y n c   w i t h   t h e   A g e n c y   c o d e   f i e l d .  {:/} |  P O I N T E R  |  | REQUIRED | Agency-4_11 | 
|  s t a t i o n _ n u m b e r  |  9 9  |  S t a t i o n   N u m b e r  | {::nomarkdown}  T h i s   i s   t h e   3   d i g i t   s t a t i o n   n u m b e r   p l u s   a n y   m o d i f i e r s .  {:/} |  S T R I N G  |  |  |  | 
|  o f f i c i a l _ v a _ n a m e  |  1 0 0  |  O f f i c i a l   V A   N a m e  | {::nomarkdown}  T h i s   f i e l d   h o l d s   t h e   O f f i c a l   V A   n a m e   f o r   t h i s   V A   f a c i l i t y . \ r T h e   v a l u e   i n   t h i s   f i e l d   s h o u l d   n o t   b e   c h a n g e d   b y   t h e   s i t e .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  i n a c t i v e _ f a c i l i t y _ f l a g  |  1 0 1  |  I n a c t i v e   F a c i l i t y   F l a g  |  |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
|  b i l l i n g _ f a c i l i t y _ n a m e  |  2 0 0  |  B i l l i n g   F a c i l i t y   N a m e  | {::nomarkdown}  T h i s   f i e l d   i s   t h e   b i l l i n g   f a c i l i t y   n a m e   p o p u l a t e d   w i t h   t h e \ r G O L D   S T A N D A R D   N A M E   p r o v i d e d   b y   t h e   C B O   a n d   r e q u i r e d   f o r \ r p h a r m a c i e s ,   C B O C ' s ,   V A M C ' s ,   e t c   -   A n y t h i n g   t h a t   c o u l d   b e   i d e n t i f i e d   \ r a s   a   B i l l i n g   F a c i l i t y   ( B i l l i n g   P r o v i d e r )   f o r   b i l l i n g   i n   V i s t A . \ r   \ r T h i s   n e w   f i e l d   i s   n o t   e d i t a b l e   l o c a l l y   ( s a m e   a s   t h e   . 0 1   a n d   1 0 0   \ r f i e l d s ) .     U p d a t e s   w o u l d   b e   m a n a g e d   t h r o u g h   F o r u m   a n d   t h e   M a s t e r   F i l e   \ r U p d a t e   m e c h a n i s m s   o n l y .      {:/} |  S T R I N G  |  |  |  | 
|  c u r r e n t _ l o c a t i o n  |  7 2 0  |  C u r r e n t   L o c a t i o n  | {::nomarkdown}  T h i s   f i e l d   f l a g s   e n t r i e s   f o r   u s e   i n   t h e   E v e n t   C a p t u r e   s o f t w a r e . \ r     \ r               ' 1 '     f o r       ' Y E S '       ( A C T I V E ) \ r     \ r               ' 0 '     f o r       ' N O '         ( I N A C T I V E )  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  h i s t o r y  |  9 9 9 . 1  |  H i s t o r y  |  |  [ O B J E C T ]  |  |  | [History-4_999](#History-4_999)  | 
|  i d e n t i f i e r  |  9 9 9 9  |  I d e n t i f i e r  |  |  [ O B J E C T ]  |  |  | [Identifier-4_9999](#Identifier-4_9999)  | 

## <a name="Contact-4_03"></a>Contact-4_03 

<dl>
<dt>id</dt><dd> C o n t a c t - 4 _ 0 3 </dd>
<dt>label</dt><dd> C o n t a c t </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  c o n t a c t  |  . 0 1  |  C o n t a c t  | {::nomarkdown}  T h e   n a m e   o f   a   c o n t a c t   a t   t h e   s i t e .  {:/} |  S T R I N G  |  | REQUIRED |  | 
|  a r e a  |  . 0 2  |  A r e a  | {::nomarkdown}  P o i n t e r   t o   t h e   p a r t   o f   t h e   s i t e   t h e   c o n t a c t   w o r k s   i n .  {:/} |  P O I N T E R  |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
|  p h o n e _ n u m b e r  |  . 0 3  |  P h o n e   #  | {::nomarkdown}  T e l e p h o n e   n u m b e r .  {:/} |  S T R I N G  |  |  |  | 

## <a name="Associations-4_014"></a>Associations-4_014 

<dl>
<dt>id</dt><dd> A s s o c i a t i o n s - 4 _ 0 1 4 </dd>
<dt>label</dt><dd> A s s o c i a t i o n s </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a s s o c i a t i o n s  |  . 0 1  |  A s s o c i a t i o n s  | {::nomarkdown}  T h i s   m u l t i p l e   f i e l d   i s   u s e d   t o   l i n k   g r o u p s   i f   I n s t i t u t i o n s   i n t o \ r a s s o c i a t i o n s .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Institution_Association_Types-4_05 | 
|  p a r e n t _ o f _ a s s o c i a t i o n  |  1  |  P a r e n t   O f   A s s o c i a t i o n  | {::nomarkdown}  T h i s   f i e l d   p o i n t s   b a c k   t o   t h e   I n s t i t u t i o n   f i l e   t o   i n d i c a t e   t h e \ r p a r e n t   o f   t h e   a s s o c i a t i o n .  {:/} |  P O I N T E R  |  |  | [Institution-4](Institution-4.md) | 

## <a name="Effective_Date_time-4_042"></a>Effective_Date_time-4_042 

<dl>
<dt>id</dt><dd> E f f e c t i v e _ D a t e _ t i m e - 4 _ 0 4 2 </dd>
<dt>label</dt><dd> E f f e c t i v e   D a t e / t i m e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e f f e c t i v e _ d a t e _ t i m e  |  . 0 1  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a t e   a n d   t i m e   o f   t h e   l a s t   c h a n g e   t o   t h e   N P I   f i e l d .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  s t a t u s  |  . 0 2  |  S t a t u s  | {::nomarkdown}  T h e   S t a t u s   o f   a n   N P I   i s   e i t h e r   ' A C T I V E '   o r   ' I N A C T I V E ' .   I   ' A C T I V E '   t h e n   \ r t h e   N P I   w i l l   b e   a c c e s s i b l e   b y   e n d - u s e r s   t o   d o c u m e n t   a   p a r t i c u l a r   p r o v i d e r . \ r I f   ' I N A C T I V E ' ,   t h e n   t h e   N P I   w i l l   o n l y   b e   a c c e s s i b l e   b y   t h e   a p p l i c a t i o n   t o \ r d i s p l a y   l e g a c y   d a t a .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 
|  n p i  |  . 0 3  |  N p i  | {::nomarkdown}  U n i q u e   N a t i o n a l   P r o v i d e r   I D .   A   u n i q u e   m e a n i n g l e s s   i n t e g e r   a s s i g n e d   t o \ r p r o v i d e r s .    {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 

## <a name="Taxonomy_Code-4_043"></a>Taxonomy_Code-4_043 

<dl>
<dt>id</dt><dd> T a x o n o m y _ C o d e - 4 _ 0 4 3 </dd>
<dt>label</dt><dd> T a x o n o m y   C o d e </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  t a x o n o m y _ c o d e  |  . 0 1  |  T a x o n o m y   C o d e  | {::nomarkdown}  T h i s   m u l t i p l e   f i e l d   h o l d s   t h e   N U C C   r e c o g n i z e d   t a x o n o m y   c o d e   f o r   a n \ r i n d i v i d u a l   o r   a n   o r g a n i z a t i o n .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Person_Class-8932_1 | 
|  p r i m a r y _ c o d e  |  . 0 2  |  P r i m a r y   C o d e  | {::nomarkdown}  O n l y   o n e   c o d e   c a n   b e   t h e   p r i m a r y   t a x o n o m y   c o d e   f o r   a   p r o v i d e r .   W h e n   a   \ r s p e c i f i c   t a x o n o m y   c o d e   i s   i d e n t i f i e d   i t   i s   t h e   p r i m a r y   c o d e   t h a t   w i l l   b e   \ r t h e   d e f a u l t .  {:/} |  B O O L E A N  |  | INDEXED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
|  s t a t u s  |  . 0 3  |  S t a t u s  | {::nomarkdown}  I f   a   t a x o n o m y   c o d e   l i s t e d   f o r   a   p r o v i d e r   i s   a   c u r r e n t l y   a c t i v e   c o d e   ( o n e   \ r t h e y   u s e   t o d a y ) ,   t h e n   t h e   s t a t u s   s h o u l d   b e   m a r k e d   w i t h   a n   ' A ' .   A t   t i m e s   a \ r p r o v i d e r   w i l l   n o   l o n g e r   u s e   a   t a x o n o m y   c o d e .   T h i s   c o d e   w i l l   b e   m a r k e d   w i t h \ r a n   ' I '   f o r   i n a c t i v e .   C o d e s   s h o u l d   n o t   b e   r e m o v e d   f r o m   a   p r o v i d e r ' s   l i s t . \ r T h e y   s h o u l d   b e   a c t i v a t e d   o r   i n a c t i v a t e d .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>A</dt><dd>ACTIVE</dd><dt>I</dt><dd>INACTIVE</dd></dl>{:/} | 

## <a name="History-4_999"></a>History-4_999 

<dl>
<dt>id</dt><dd> H i s t o r y - 4 _ 9 9 9 </dd>
<dt>label</dt><dd> H i s t o r y </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  e f f e c t i v e _ d a t e  |  . 0 1  |  E f f e c t i v e   D a t e  |  |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  n a m e _ c h a n g e d _ f r o m  |  . 0 2  |  N a m e   ( c h a n g e d   F r o m )  |  |  S T R I N G  |  | INDEXED |  | 
|  o f f i c a l _ v a _ n a m e _ c h a n g e d _ f r o m  |  . 0 3  |  O f f i c a l   V A   N a m e   ( c h a n g e d   F r o m )  |  |  S T R I N G  |  |  |  | 
|  r e a l i g n e d _ t o  |  . 0 5  |  R e a l i g n e d   T o  |  |  P O I N T E R  |  | INDEXED | [Institution-4](Institution-4.md) | 
|  r e a l i g n e d _ f r o m  |  . 0 6  |  R e a l i g n e d   F r o m  |  |  P O I N T E R  |  | INDEXED | [Institution-4](Institution-4.md) | 
|  d e a c t i v a t e d _ f a c i l i t y _ _ _ s t a _ n u m b e r  |  . 0 7  |  D e a c t i v a t e d   F a c i l i t y   /   S t a   #  |  |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>DEACTIVATED</dd></dl>{:/} | 
|  a c t i v a t e d _ f a c i l i t y  |  . 0 8  |  A c t i v a t e d   F a c i l i t y  |  |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVATED</dd></dl>{:/} | 

## <a name="Identifier-4_9999"></a>Identifier-4_9999 

<dl>
<dt>id</dt><dd> I d e n t i f i e r - 4 _ 9 9 9 9 </dd>
<dt>label</dt><dd> I d e n t i f i e r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  c o d i n g _ s y s t e m  |  . 0 1  |  C o d i n g   S y s t e m  |  |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  i d - _ 0 2  |  . 0 2  |  I d  |  |  S T R I N G  |  |  |  | 
|  e f f e c t i v e _ d a t e _ t i m e  |  . 0 3  |  E f f e c t i v e   D a t e / t i m e  | {::nomarkdown}  D e s c r i b e s   t h e   p a i r   S t a t u s   a n d   E f f e c t i v e   D a t e / T i m e   f o r   e a c h   r e f e r e n c e   t e r m .  {:/} |  D A T E - T I M E  |  |  |  | 
|  s t a t u s  |  . 0 4  |  S t a t u s  | {::nomarkdown}  T h e   S t a t u s   o f   a   r e f e r e n c e   t e r m   i s   e i t h e r   ' A C T I V E '   o r   ' I N A C T I V E ' ,   t h e n   t h e   \ r t e r m   w i l l   b e   a c c e s s i b l e   b y   e n d - u s e r s   t o   d o c u m e n t   a   p a r t i c u l a r   p a t i e n t   \ r e v e n t .   I f   ' I N A C T I V E ' ,   t h e n   t h e   t e r m   w i l l   o n l y   b e   a c c e s s i b l e   b y   t h e   \ r a p p l i c a t i o n   t o   d i s p l a y   l e g a c y   d a t a .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}