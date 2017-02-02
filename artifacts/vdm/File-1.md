---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; File-1 

<dl>
<dt>id</dt><dd> F i l e - 1 </dd>
<dt>fmId</dt><dd> 1 </dd>
<dt>label</dt><dd> F i l e </dd>
<dt>location</dt><dd> ^ D I C ( </dd>
<dt>description</dt><dd>  T h i s   f i l e   s t o r e s   t h e   d e s c r i p t i v e   i n f o r m a t i o n   f o r   a l l   f i l e s   i n   t h e   F i l e M a n \ r m a n a g e d   d a t a b a s e .  </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  n u m b e r  |  . 0 0 1  |  N u m b e r  |  |  I E N  |  |  |  | 
|  n a m e  |  . 0 1  |  N a m e  |  |  S T R I N G  |  | REQUIRED, INDEXED |  | 
|  d e s c r i p t i o n  |  4  |  D e s c r i p t i o n  |  |  S T R I N G  |  |  |  | 
|  a p p l i c a t i o n _ g r o u p  |  1 0  |  A p p l i c a t i o n   G r o u p  |  |  [ O B J E C T ]  |  |  | [Applicationgroup-1_005](#Applicationgroup-1_005)  | 
|  d e v e l o p e r  |  2 0  |  D e v e l o p e r  |  |  P O I N T E R  |  |  | [New_Person-200](New_Person-200.md) | 
|  d a t e  |  2 1  |  D a t e  |  |  D A T E - T I M E  |  |  |  | 

## <a name="Applicationgroup-1_005"></a>Applicationgroup-1_005 

<dl>
<dt>id</dt><dd> A p p l i c a t i o n g r o u p - 1 _ 0 0 5 </dd>
<dt>label</dt><dd> A p p l i c a t i o n - g r o u p </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
|  a p p l i c a t i o n _ g r o u p  |  . 0 1  |  A p p l i c a t i o n   G r o u p  |  |  S T R I N G  |  | REQUIRED, INDEXED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:44:43 am</p>{:/}