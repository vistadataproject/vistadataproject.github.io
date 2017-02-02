---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrv_Vital_Measurement-120_5 

<dl>
<dt>id</dt><dd> G m r v _ V i t a l _ M e a s u r e m e n t - 1 2 0 _ 5 </dd>
<dt>fmId</dt><dd> 1 2 0 . 5 </dd>
<dt>label</dt><dd> G m r v   V i t a l   M e a s u r e m e n t </dd>
<dt>location</dt><dd> ^ G M R ( 1 2 0 . 5 , </dd>
<dt>description</dt><dd>  T h i s   f i l e   c o n t a i n s   v i t a l   s i g n   i n f o r m a t i o n   a n d   o t h e r   m e a s u r e m e n t   d a t a   f o r   a   \ r p a t i e n t .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  d a t e _ t i m e _ v i t a l s _ t a k e n  |  . 0 1  |  D a t e / t i m e   V i t a l s   T a k e n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a t e / t i m e   t h i s   v i t a l / m e a s u r e m e n t   w a s   t a k e n   b y   t h e \ r c a r e   p r o v i d e r .  {:/} |  D A T E - T I M E  |  | REQUIRED, INDEXED |  | 
|  p a t i e n t  |  . 0 2  |  P a t i e n t  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   n a m e   o f   t h e   p a t i e n t   f o r   w h o m   t h i s   v i t a l   m e a s u r e m e n t \ r d a t a   w a s   e n t e r e d .     P o i n t e r   t o   t h e   P A T I E N T   ( # 2 )   f i l e .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
|  v i t a l _ t y p e  |  . 0 3  |  V i t a l   T y p e  | {::nomarkdown}  T h i s   f i e l d   d e n o t e s   t h e   t y p e   o f   m e a s u r e m e n t   f o r   t h i s   r e c o r d .     P o i n t e r   t o \ r t h e   G M R V   V I T A L   T Y P E   ( # 1 2 0 . 5 1 )   f i l e .  {:/} |  P O I N T E R  |  | REQUIRED, INDEXED | Gmrv_Vital_Type-120_51 | 
|  d a t e _ t i m e _ v i t a l s _ e n t e r e d  |  . 0 4  |  D a t e / t i m e   V i t a l s   E n t e r e d  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   d a t e / t i m e   t h a t   t h i s   r e c o r d   w a s   e n t e r e d .  {:/} |  D A T E - T I M E  |  | REQUIRED |  | 
|  h o s p i t a l _ l o c a t i o n  |  . 0 5  |  H o s p i t a l   L o c a t i o n  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   l o c a t i o n   w h e r e   t h i s   m e a s u r e m e n t   w a s   t a k e n .     P o i n t e r   \ r t o   t h e   H O S P I T A L   L O C A T I O N   ( # 4 4 )   f i l e .  {:/} |  P O I N T E R  |  | REQUIRED | [Hospital_Location-44](Hospital_Location-44.md) | 
|  e n t e r e d _ b y  |  . 0 6  |  E n t e r e d   B y  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   n a m e   o f   t h e   p e r s o n   w h o   e d i t e d   t h e   f i l e   e n t r y .     \ r P o i n t e r   t o   t h e   N E W   P E R S O N   ( # 2 0 0 )   f i l e .  {:/} |  P O I N T E R  |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
|  r a t e  |  1 . 2  |  R a t e  | {::nomarkdown}  T h i s   f i e l d   c o n t a i n s   t h e   n u m e r i c   v a l u e   a s s o c i a t e d   w i t h   t h i s   v i t a l \ r m e a s u r e m e n t .  {:/} |  S T R I N G  |  |  |  | 
|  s u p p l e m e n t a l _ o 2  |  1 . 4  |  S u p p l e m e n t a l   O 2  | {::nomarkdown}  T h i s   f i e l d   s t o r e s   t h e   i n f o r m a t i o n   o f   t h e   s u p p l e m e n t a l   o x y g e n   a s   f o l l o w s : \ r     . 5 - 2 0   l / m i n   ( l i t e r s / m i n u t e )       a n d / o r \ r     2 1 - 1 0 0   %   o f   o x y g e n   c o n c e n t r a t i o n \ r F o r   e x a m p l e :   4 . 5   l / m i n   4 0 % \ r                           4 . 5   l / m i n \ r                           4 0   %  {:/} |  S T R I N G  |  |  |  | 
|  e n t e r e d _ i n _ e r r o r  |  2  |  E n t e r e d   I n   E r r o r  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   t h a t   t h i s   r e c o r d   w a s   f l a g g e d   a s   e n t e r e d   i n   e r r o r .  {:/} |  B O O L E A N  |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
|  e r r o r _ e n t e r e d _ b y  |  3  |  E r r o r   E n t e r e d   B y  | {::nomarkdown}  T h i s   f i e l d   i n d i c a t e s   t h e   n a m e   o f   t h e   p e r s o n   r e s p o n s i b l e   f o r   e n t e r i n g   t h e   \ r r e c o r d   i n   e r r o r .     P o i n t e r   t o   t h e   N E W   P E R S O N   ( # 2 0 0 )   f i l e .  {:/} |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  r e a s o n _ e n t e r e d _ i n _ e r r o r  |  4  |  R e a s o n   E n t e r e d   I n   E r r o r  | {::nomarkdown}  T h i s   m u l t i p l e   c o n t a i n s   a   l i s t   o f   r e a s o n s   f o r   e n t e r i n g   a   v i t a l   m e a s u r e m e n t   \ r i n   e r r o r .  {:/} |  [ O B J E C T ]  |  |  | [Reason_Entered_In_Error-120_506](#Reason_Entered_In_Error-120_506)  | 
|  q u a l i f i e r  |  5  |  Q u a l i f i e r  | {::nomarkdown}  A   l i s t   o f   q u a l i f i e r s   a s s o c i a t e d   w i t h   t h i s   m e a s u r e m e n t .  {:/} |  [ P O I N T E R ]  |  |  |  { i d : G m r v _ V i t a l _ Q u a l i f i e r - 1 2 0 _ 5 2 }  | 

## <a name="Reason_Entered_In_Error-120_506"></a>Reason_Entered_In_Error-120_506 

<dl>
<dt>id</dt><dd> R e a s o n _ E n t e r e d _ I n _ E r r o r - 1 2 0 _ 5 0 6 </dd>
<dt>label</dt><dd> R e a s o n   E n t e r e d   I n   E r r o r </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  r e a s o n _ e n t e r e d _ i n _ e r r o r  |  . 0 1  |  R e a s o n   E n t e r e d   I n   E r r o r  | {::nomarkdown}  T h i s   f i e l d   r e c o r d s   t h e   r e a s o n   f o r   e n t e r i n g   t h e   d a t a   i n   e r r o r .  {:/} |  E N U M E R A T I O N  |  | REQUIRED | {::nomarkdown}<dl><dt>2</dt><dd>INCORRECT READING</dd><dt>4</dt><dd>INVALID RECORD</dd><dt>1</dt><dd>INCORRECT DATE/TIME</dd><dt>3</dt><dd>INCORRECT PATIENT</dd></dl>{:/} | 
|  d a t e _ r e a s o n _ e n t e r e d _ i n _ e r r o r  |  . 0 2  |  D a t e   R e a s o n   E n t e r e d   I n   E r r o r  |  |  D A T E - T I M E  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}