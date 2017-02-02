---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Service_section-49 

<dl>
<dt>id</dt><dd> S e r v i c e _ s e c t i o n - 4 9 </dd>
<dt>fmId</dt><dd> 4 9 </dd>
<dt>label</dt><dd> S e r v i c e / s e c t i o n </dd>
<dt>location</dt><dd> ^ D I C ( 4 9 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   i s   a   l i s t   o f   t h e   s e r v i c e s   a n d   s e c t i o n s   w i t h i n   t h e   s e r v i c e s . \ r S o m e   o f   t h e   e n t r i e s   m a y   b e   ' M I S   C O S T I N G   S E C T I O N S '   f o r   u s e   w i t h   t h e \ r c o s t   a c c o u n t i n g   p a r t   o f   t h e   M a n a g e m e n t   I n f o r m a t i o n   S y s t e m   s o f t w a r e . \ r A   s e c t i o n   i s   a n   M I S   s e c t i o n   i f   t h e r e   i s   a   c o d e   e n t e r e d   i n   t h e   f i e l d \ r c a l l e d   M I S   C O S T I N G   C O D E .     I n   t h e   c o s t   a c c o u n t i n g   s y s t e m   a l l   m e d i c a l \ r c e n t e r   c o s t s   w i l l   b e   t i e d   t o   a   p a r t i c u l a r   s e c t i o n .     W h e n   M I S   s e c t i o n s \ r c h a n g e ,   d o   n o t   d e l e t e   t h e   o l d   s e c t i o n .     I n s t e a d ,   c h a n g e   t h e   f i e l d s   u n d e r \ r t h e   m u l t i p l e   f i e l d   c a l l e d   \  D A T E   C L O S E D \    t o   i d e n t i f y   w h i c h   s e c t i o n s   a r e \ r n o   l o n g e r   i n   u s e .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n a m e  |  . 0 1  |  N a m e  | {::nomarkdown}  E n t e r   S e r v i c e   o r   S e c t i o n   n a m e .  {:/} |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  a b b r e v i a t i o n  |  1  |  A b b r e v i a t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   a c c e p t e d   a b b r e v i a t i o n   f o r   t h i s   s e r v i c e   o r   s e c t i o n .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  d e s c r i p t i o n  |  1 . 3  |  D e s c r i p t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   b r i e f   d e s c r i p t i o n   o r   t h e   m i s s i o n   o f   t h i s   s e r v i c e \ r o r   s e c t i o n .  {:/} |  S T R I N G  |  |  |  | 
|  m a i l _ s y m b o l  |  1 . 5  |  M a i l   S y m b o l  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   a c c e p t e d   m a i l   r o u t i n g   s y m b o l   f o r   t h e   s e r v i c e \ r o r   s e c t i o n .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  p a r e n t _ s e r v i c e  |  1 . 6  |  P a r e n t   S e r v i c e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   p o i n t e r   t o   t h e   n a m e   o f   t h e   s e r v i c e   o r   s e c t i o n   w h i c h \ r i s   \  p a r e n t \    t o   t h i s   s e c t i o n .  {:/} |  P O I N T E R  |  | INDEXED | Service_section-49 | 
|  t y p e _ o f _ s e r v i c e  |  1 . 7  |  T y p e   O f   S e r v i c e  | {::nomarkdown}  T h i s   f l a g   i n d i c a t e s   t h e   t y p e   o f   e a c h   e n t r y   i n   t h i s   f i l e .     S e r v i c e s   o r \ r s u b - s e r v i c e s   m a y   b e   m a r k e d   a s   A d m i n i s t r a t i v e   o r   f o r   P a t i e n t   C a r e . \ r o r   f o r   P a t i e n t   C a r e .  {:/} |  E N U M E R A T I O N  |  | INDEXED | {::nomarkdown}<dl><dt>C</dt><dd>PATIENT CARE</dd><dt>A</dt><dd>ADMINISTRATIVE</dd></dl>{:/} | 
|  c h i e f  |  2  |  C h i e f  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   p o i n t e r   t o   t h e   n a m e   o f   t h e   c h i e f   o f   t h i s   s e r v i c e \ r o r   s e c t i o n .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  c h i e f _ p h o n e  |  3  |  C h i e f   P h o n e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   t e l e p h o n e   n u m b e r ( s )   f o r   t h e   c h i e f   o f   t h i s   s e r v i c e   . \ r o r   s e c t i o n .  {:/} |  [ S T R I N G ]  |  |  |  | 
|  a s s t _ c h i e f  |  4  |  A s s t   C h i e f  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   p o i n t e r   t o   t h e   n a m e   o f   t h e   a s s i s t a n t   c h i e f   o f   t h i s \ r s e r v i c e   o r   s e c t i o n .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  a s s t _ c h i e f _ p h o n e  |  5  |  A s s t   C h i e f   P h o n e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   t e l e p h o n e   n u m b e r ( s )   f o r   t h e   a s s i s t a n t   c h i e f   o f \ r t h i s   s e r v i c e   o r   s e c t i o n .  {:/} |  [ S T R I N G ]  |  |  |  | 
|  l o c a t i o n  |  6  |  L o c a t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   p h y s i c a l   l o c a t i o n   o f   t h i s   s e r v i c e   o r   s e c t i o n \ r ( i . e . ,   r o o m   n u m b e r ) .  {:/} |  S T R I N G  |  |  |  | 
|  m i s _ c o s t i n g _ c o d e  |  9  |  M i s   C o s t i n g   C o d e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   M a n a g e m e n t   I n f o r m a t i o n   C o s t   A c c o u n t i n g   c o d e \ r f o r   t h i s   s e r v i c e   o r   s e c t i o n .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  c o s t _ c e n t e r  |  1 0  |  C o s t   C e n t e r  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   c o s t   c e n t e r   n a m e   f o r   t h i s   s e r v i c e   s e c t i o n . \ r T h e   c o s t   c e n t e r   m u s t   b e   d e f i n e d   i n   t h e   I F C A P   C o s t   C e n t e r   F i l e \ r 4 2 0 . 1 .  {:/} |  S T R I N G  |  | INDEXED |  | 
|  t y p e _ o f _ c o s t i n g _ s e c t i o n  |  1 1  |  T y p e   O f   C o s t i n g   S e c t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   t y p e   o f   m a n a g e m e n t   i n f o r m a t i o n   c o s t   a c c o u n t i n g \ r s e c t i o n   f o r   t h i s   s e r v i c e   o r   s e c t i o n .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SUB-SPECIALTY ADMINISTRATIVE</dd><dt>N</dt><dd>NON-ADMINISTRATIVE</dd><dt>A</dt><dd>ADMINISTRATIVE</dd><dt>O</dt><dd>OFF-STATION</dd></dl>{:/} | 
|  a m b u l a t o r y _ c a r e _ f l a g  |  1 2  |  A m b u l a t o r y   C a r e   F l a g  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   a m b u l a t o r y   c a r e   f l a g .     Y e s   o r   N o   f o r   t h i s \ r s e r t i c e   o r   s e c t i o n .  {:/} |  E N U M E R A T I O N  |  |  | {::nomarkdown}<dl><dt>Y</dt><dd>AMBULATORY CARE</dd><dt>N</dt><dd>NOT AMBULATORY CARE</dd></dl>{:/} | 
|  d a t e _ c l o s e d  |  1 3  |  D a t e   C l o s e d  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   d a t e ( s )   w h e n   t h i s   s e r v i c e   o r   s e c t i o n   c l o s e d .  {:/} |  [ O B J E C T ]  |  |  | [Date_Closed-49_07](#Date_Closed-49_07)  | 
|  n a t i o n a l _ s e r v i c e  |  7 3 0  |  N a t i o n a l   S e r v i c e  | {::nomarkdown}  T h i s   f i e l d   i s   a   p o i n t e r   t o   t h e   N a t i o n a l   S e r v i c e   F i l e   # 7 3 0 ,   a n d   i s \ r u s e d   t o   l i n k   t h e   l o c a l l y   b u i l t   ' S e r v i c e / S e c t i o n '   f i l e   t o   t h e \ r s t a n d a r d i z e d   l i s t   o f   n a t i o n a l l y   r e c o g n i z e d   s e r v i c e s .  {:/} |  P O I N T E R  |  | INDEXED | National_Service-730 | 
|  c o o r d i n a t o r _ i r m  |  1 6 0 0 0  |  C o o r d i n a t o r   ( i r m )  | {::nomarkdown}  T h i s   f i e l d   i s   u s e d   b y   k e r n e l   t o   l i n k   a   N E W   P E R S O N   e n t r y   t h r o u g h   t h e \ r s e r v i c e / s e c t i o n   p o i n t e r   b a c k   t o   a   N e w   P e r s o n   e n t r y   f o r   a c c e s s   h e l p .  {:/} |  P O I N T E R  |  | INDEXED | [New_Person-200](New_Person-200.md) | 

## <a name="Date_Closed-49_07"></a>Date_Closed-49_07 

<dl>
<dt>id</dt><dd> D a t e _ C l o s e d - 4 9 _ 0 7 </dd>
<dt>label</dt><dd> D a t e   C l o s e d </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d a t e _ c l o s e d  |  . 0 1  |  D a t e   C l o s e d  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   d a t e / t i m e   w h e n   t h i s   s e r v i c e   o r   s e c t i o n   c l o s e d   f o r \ r h o s p i t a l   u s e .  {:/} |  D A T E - T I M E  |  | REQUIRED |  | 
|  d a t e _ r e o p e n e d  |  1  |  D a t e   R e - o p e n e d  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   a   d a t e / t i m e   w h e n   t h i s   c l o s e d   s e r v i c e   o r   s e c t i o n \ r w a s   r e o p e n e d   f o r   h o s p i t a l   u s e .  {:/} |  D A T E - T I M E  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}