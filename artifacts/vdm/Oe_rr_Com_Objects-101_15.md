---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_Com_Objects-101_15 

<dl>
<dt>id</dt><dd>Oe_rr_Com_Objects-101_15</dd>
<dt>fmId</dt><dd>101.15</dd>
<dt>label</dt><dd>Oe/rr Com Objects</dd>
<dt>location</dt><dd>^ORD(101.15,</dd>
<dt>description</dt><dd></dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name |  | STRING |  | REQUIRED, INDEXED |  | 
| object_guid | .02 | Object Guid | {::nomarkdown}COM Object GUID{:/} | STRING |  | REQUIRED |  | 
| inactive | .03 | Inactive |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>I</dt><dd>INACTIVE</dd></dl>{:/} | 
| param1 | .04 | Param1 | {::nomarkdown}Optional parameter to pass to COM object as PARAM1 {:/} | STRING |  |  |  | 
| description | 2 | Description | {::nomarkdown}Optional description of COM Object.  Should include any contact<br/>information for vendor or other provider of the COM Object.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:17:13 pm</p>{:/}