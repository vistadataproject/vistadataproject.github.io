---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Medication_Routes-51_2 

<dl>
<dt>id</dt><dd> M e d i c a t i o n _ R o u t e s - 5 1 _ 2 </dd>
<dt>fmId</dt><dd> 5 1 . 2 </dd>
<dt>label</dt><dd> M e d i c a t i o n   R o u t e s </dd>
<dt>location</dt><dd> ^ P S ( 5 1 . 2 , </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  T h i s   i s   a   r o u t e   o f   a d m i n i s t r a t i o n   f o r   a   m e d i c a t i o n . \ r a   p a t i e n t .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  a b b r e v i a t i o n  |  1  |  A b b r e v i a t i o n  | {::nomarkdown}  T h i s   i s   a n   a b b r e v i a t i o n   f o r   t h e   m e d i c a t i o n   r o u t e \ r e n t e r e d .     I f   a n   a b b r e v i a t i o n   i s   f o u n d   f o r   a   m e d i c a t i o n   r o u t e ,   t h e \ r a b b r e v i a t i o n   w i l l   b e   u s e d   o n   v a r i o u s   r e p o r t s . \ r t h e   L a t i n   f o r m   o f   t h e   m e d i c a t i o n   r o u t e   n a m e .   I n   m o s t   c a s e s ,   m e d i c a t i o n \ r r o u t e s   c a n   b e   s e l e c t e d   b y   a b b r e v i a t i o n .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  p a c k a g e _ u s e  |  3  |  P a c k a g e   U s e  | {::nomarkdown}      T h e   N a t i o n a l   D r u g   F i l e   u s e s   f a r   m o r e   M e d   R o u t e s   t h a n   n e e d   t o \ r b e   s e l e c t e d   b y   I n p a t i e n t   p e r s o n n e l .     T h i s   f i e l d   i s   u s e d   t o   s c r e e n \ r o u t   M e d   R o u t e s   n o t   n e e d e d   b y   t h e   I n p a t i e n t   p a c k a g e s . \ r m e d   r o u t e   i s   f o r   u s e   o n l y   b y   t h e   N a t i o n a l   D r u g   F i l e .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>ALL PACKAGES</dd><dt>0</dt><dd>NATIONAL DRUG FILE ONLY</dd></dl>{:/} | 
|  o u t p a t i e n t _ e x p a n s i o n  |  4  |  O u t p a t i e n t   E x p a n s i o n  | {::nomarkdown}  T h i s   i s   t h e   M e d i c a t i o n   r o u t e ' s   e x p a n s i o n   t o   b e   u s e   i n   t h e   O u t p a t i e n t   P h a r m a c y . \ r P h a r m a c y .  {:/} |  S T R I N G  |  |  |  | 
|  o t h e r _ l a n g u a g e _ e x p a n s i o n  |  4 . 1  |  O t h e r   L a n g u a g e   E x p a n s i o n  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   t o   s t o r e   t h e   o t h e r   l a n g u a g e   e x p a n s i o n .  {:/} |  S T R I N G  |  |  |  | 
|  i n a c t i v a t i o n _ d a t e  |  5  |  I n a c t i v a t i o n   D a t e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   t h a t   t h e   m e d i c a t i o n   r o u t e   w a s   i n a c t i v a t e d .  {:/} |  D A T E - T I M E  |  |  |  | 
|  i v _ f l a g  |  6  |  I v   F l a g  | {::nomarkdown}  T h i s   f i e l d   s h a l l   d e s i g n a t e   I V   m e d i c a t i o n   r o u t e s .   T h i s   w i l l   h e l p   d e t e r m i n e \ r h o w   I n p a t i e n t   M e d i c a t i o n   o r d e r s   e n t e r e d   t h r o u g h   C P R S   w i l l   b e   f i n i s h e d \ r i n   t h e   P h a r m a c y   p a c k a g e .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  s t a n d a r d _ m e d _ r o u t e _ c h a n g e _ l o g  |  7  |  S t a n d a r d   M e d   R o u t e   C h a n g e   L o g  | {::nomarkdown}  T h i s   m u l t i p l e   w i l l   t r a c k   a l l   c h a n g e s   m a d e   t o   t h e   S T A N D A R D   M E D I C A T I O N   \ r R O U T E   ( # 1 0 )   F i e l d ,   w h i c h   i s   t h e   p o i n t e r   t o   t h e   S T A N D A R D   M E D I C A T I O N   R O U T E S   \ r ( # 5 1 . 2 3 )   F i l e .  {:/} |  [ O B J E C T ]  |  |  | [Standard_Med_Route_Change_Log-51_27](#Standard_Med_Route_Change_Log-51_27)  | 
|  p r o m p t _ f o r _ i n j _ s i t e _ i n _ b c m a  |  8  |  P r o m p t   F o r   I n j .   S i t e   I n   B c m a  | {::nomarkdown}  T h e   p u r p o s e   o f   t h i s   f i e l d   i s   t o   p r o v i d e   a   w a y   t o   i n d i c a t e   t h a t   a \ r m e d i c a t i o n   r o u t e   n e e d s   t o   h a v e   a   p r o m p t   f o r   i n j e c t i o n   s i t e   i n   B C M A .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  d s p l y _ o n _ i v p _ i v p b _ t a b _ i n _ b c m a  |  9  |  D s p l y   O n   I v p / i v p b   T a b   I n   B c m a ?  |  |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
|  s t a n d a r d _ m e d i c a t i o n _ r o u t e  |  1 0  |  S t a n d a r d   M e d i c a t i o n   R o u t e  | {::nomarkdown}  T h i s   i s   a   p o i n t e r   t o   t h e   S t a n d a r d   M e d i c a t i o n   R o u t e s   ( # 5 1 . 2 3 )   F i l e .   T h i s   \ r l i n k   w i l l   a l l o w   s t a n d a r d i z a t i o n   o f   t h e   l o c a l   M e d i c a t i o n   R o u t e ,   t o   b e   u s e d   \ r f o r   v a r i o u s   p u r p o s e s ,   s u c h   a s   u s i n g   a   S t a n d a r d   M e d   R o u t e   f o r   V e n d o r   o r d e r   \ r c h e c k s .  {:/} |  P O I N T E R  |  |  | Standard_Medication_Routes-51_23 | 

## <a name="Standard_Med_Route_Change_Log-51_27"></a>Standard_Med_Route_Change_Log-51_27 

<dl>
<dt>id</dt><dd> S t a n d a r d _ M e d _ R o u t e _ C h a n g e _ L o g - 5 1 _ 2 7 </dd>
<dt>label</dt><dd> S t a n d a r d   M e d   R o u t e   C h a n g e   L o g </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a c t i v i t y _ d a t e _ a n d _ t i m e  |  . 0 1  |  A c t i v i t y   D a t e   A n d   T i m e  | {::nomarkdown}  T h i s   i s   t h e   d a t e   a n d   t i m e   t h e   c h a n g e   w a s   m a d e   t o   t h e   S T A N D A R D   M E D I C A T I O N   \ r R O U T E   ( # 1 0 )   F i e l d .   I t   i s   s e t   f r o m   t h e   P S S M E D X   r o u t i n e ,   w h i c h   i s   i n v o k e d   \ r f r o m   t h e   n e w   s t y l e   c r o s s   r e f e r e n c e   o f   t h e   S T A N D A R D   M E D I C A T I O N   R O U T E   ( # 1 0 )   \ r F i e l d   o f   t h e   M E D I C A T I O N   R O U T E S   ( # 5 1 . 2 )   F i l e .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  p e r s o n _ m a k i n g _ c h a n g e  |  1  |  P e r s o n   M a k i n g   C h a n g e  | {::nomarkdown}  T h i s   i s   p e r s o n   w h o   m a d e   t h e   c h a n g e   t o   t h e   S T A N D A R D   M E D I C A T I O N   R O U T E   ( # 1 0 )   \ r F i e l d .   T h i s   f i e l d   w i l l   b e   n u l l   i f   t h e   c h a n g e   w a s   d o n e   b y   a n   a u t o m a t e d   \ r p r o c e s s .   I t   i s   s e t   f r o m   t h e   P S S M E D X   r o u t i n e ,   w h i c h   i s   i n v o k e d   f r o m   t h e   n e w \ r s t y l e   c r o s s   r e f e r e n c e   o f   t h e   S T A N D A R D   M E D I C A T I O N   R O U T E   ( # 1 0 )   F i e l d   o f   t h e \ r M E D I C A T I O N   R O U T E S   ( # 5 1 . 2 )   F i l e .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  o l d _ v a l u e  |  2  |  O l d   V a l u e  | {::nomarkdown}  T h i s   i s   t h e   p r e v i o u s   v a l u e   o f   t h e   S T A N D A R D   M E D I C A T I O N   R O U T E   ( # 1 0 )   F i e l d   \ r w h e n   a   c h a n g e   i s   m a d e .   I t   c a n   b e   n u l l ,   i f   t h e r e   w a s   n o   p r e v i o u s   v a l u e .   I t   \ r i s   s e t   f r o m   t h e   P S S M E D X   r o u t i n e ,   w h i c h   i s   i n v o k e d   f r o m   t h e   n e w   s t y l e   c r o s s \ r r e f e r e n c e   o f   t h e   S T A N D A R D   M E D I C A T I O N   R O U T E   ( # 1 0 )   F i e l d   o f   t h e   M E D I C A T I O N \ r R O U T E S   ( # 5 1 . 2 )   F i l e .  {:/} |  P O I N T E R  |  |  | Standard_Medication_Routes-51_23 | 
|  n e w _ v a l u e  |  3  |  N e w   V a l u e  | {::nomarkdown}  T h i s   i s   t h e   n e w   v a l u e   o f   t h e   S T A N D A R D   M E D I C A T I O N   R O U T E   ( # 1 0 )   F i e l d   w h e n   a \ r c h a n g e   i s   m a d e .   I t   c a n   b e   n u l l ,   i f   t h e r e   i s   n o   n e w   v a l u e .   I t   i s   s e t   f r o m \ r t h e   P S S M E D X   r o u t i n e ,   w h i c h   i s   i n v o k e d   f r o m   t h e   n e w   s t y l e   c r o s s   r e f e r e n c e \ r o f   t h e   S T A N D A R D   M E D I C A T I O N   R O U T E   ( # 1 0 )   F i e l d   o f   t h e   M E D I C A T I O N   R O U T E S \ r ( # 5 1 . 2 )   F i l e .  {:/} |  P O I N T E R  |  |  | Standard_Medication_Routes-51_23 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}