---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Parameters-8989_5
# Parameters (8989.5)
This file contains the actual data values for the parameters found in the PARAMETER DEFINITION file (#8989.51).

<dl>
<dt>Global</dt><dd>^XTV(8989.5,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Entity**{::nomarkdown}<pre><code>  entity</code></pre>{:/} | .01 | This is the entity to which the parameter applies.  It is a variable <br/>pointer.  An entity may be any of the following:<br/> <br/>     USR  User      (   200  New Person file       )<br/>     CLS  Class     (  8930  Usr Class file        )<br/>     TEA  Team      (404.51  Team file             )<br/>     LOC  Location  (    44  Hospital Location file)<br/>     SRV  Service   (    49  Service/Section file  )<br/>     DIV  Division  (     4  Institution file      )<br/>     SYS  System    (   4.2  Domain file           )<br/>     PKG  Package   (   9.4  Package file          )<br/>     DEV  Device    (   3.5  Device file           ) | POINTER | INDEXED<br/>REQUIRED | [New_Person-200](New_Person-200)<br/>[Usr_Class-8930](Usr_Class-8930)<br/>[Team-404_51](Team-404_51)<br/>[Hospital_Location-44](Hospital_Location-44)<br/>[Service_section-49](Service_section-49)<br/>[Institution-4](Institution-4)<br/>[Domain-4_2](Domain-4_2)<br/>[Package-9_4](Package-9_4)<br/>[Roombed-405_4](Roombed-405_4)<br/>[Oe_rr_List-100_21](Oe_rr_List-100_21)<br/>[Device-3_5](Device-3_5)
**Parameter**{::nomarkdown}<pre><code>  parameter</code></pre>{:/} | .02 | This is the parameter that is being assigned a value for this entity. | POINTER | REQUIRED | [Parameter_Definition-8989_51](Parameter_Definition-8989_51)
**Instance**{::nomarkdown}<pre><code>  instance</code></pre>{:/} | .03 | This contains an instance identifier for cases where there may be multiple <br/>instances of a parameter for the same entity.  It is required.  (It defaults <br/>to 1 in cases where multiple instances are not allowed.) | STRING | REQUIRED | 
**Value**{::nomarkdown}<pre><code>  value</code></pre>{:/} | 1 | This is the value for the parameter.  The allowable values are checked <br/>according to the data type listed for the parameter in the PARAMETER <br/>DEFINITION file. | STRING | REQUIRED | 
**Word Processing Text**{::nomarkdown}<pre><code>  word_processing_text</code></pre>{:/} | 2 | If the parameter type is word processing, the word processing text is<br/>contained here and the VALUE field may contain a one line title for the<br/>word processing text. | STRING |  | 
**M Code**{::nomarkdown}<pre><code>  m_code</code></pre>{:/} | 3 | When a parameter is of type M (for MUMPS code), the executable code is <br/>stored here, rather than in the VALUE field. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}