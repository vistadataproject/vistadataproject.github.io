---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Parameters-8989_5 

<dl>
<dt>id</dt><dd>Parameters-8989_5</dd>
<dt>fmId</dt><dd>8989.5</dd>
<dt>label</dt><dd>Parameters</dd>
<dt>location</dt><dd>^XTV(8989.5,</dd>
<dt>description</dt><dd>This file contains the actual data values for the parameters found in the<br/>PARAMETER DEFINITION file (#8989.51).</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| entity | .01 | Entity | {::nomarkdown}This is the entity to which the parameter applies.  It is a variable <br/>pointer.  An entity may be any of the following:<br/> <br/>     USR  User      (   200  New Person file       )<br/>     CLS  Class     (  8930  Usr Class file        )<br/>     TEA  Team      (404.51  Team file             )<br/>     LOC  Location  (    44  Hospital Location file)<br/>     SRV  Service   (    49  Service/Section file  )<br/>     DIV  Division  (     4  Institution file      )<br/>     SYS  System    (   4.2  Domain file           )<br/>     PKG  Package   (   9.4  Package file          )<br/>     DEV  Device    (   3.5  Device file           ){:/} | POINTER |  | REQUIRED, INDEXED | undefined | 
| parameter | .02 | Parameter | {::nomarkdown}This is the parameter that is being assigned a value for this entity.{:/} | POINTER |  | REQUIRED | Parameter_Definition-8989_51 | 
| instance | .03 | Instance | {::nomarkdown}This contains an instance identifier for cases where there may be multiple <br/>instances of a parameter for the same entity.  It is required.  (It defaults <br/>to 1 in cases where multiple instances are not allowed.){:/} | STRING |  | REQUIRED |  | 
| value | 1 | Value | {::nomarkdown}This is the value for the parameter.  The allowable values are checked <br/>according to the data type listed for the parameter in the PARAMETER <br/>DEFINITION file.{:/} | STRING |  | REQUIRED |  | 
| word_processing_text | 2 | Word Processing Text | {::nomarkdown}If the parameter type is word processing, the word processing text is<br/>contained here and the VALUE field may contain a one line title for the<br/>word processing text.{:/} | STRING |  |  |  | 
| m_code | 3 | M Code | {::nomarkdown}When a parameter is of type M (for MUMPS code), the executable code is <br/>stored here, rather than in the VALUE field.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:19 pm</p>{:/}