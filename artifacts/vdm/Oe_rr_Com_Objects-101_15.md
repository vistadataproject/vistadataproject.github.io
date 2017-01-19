---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_Com_Objects-101_15 

 property | value 
--- | --- 
 id | Oe_rr_Com_Objects-101_15
 fmId | 101.15
 label | Oe/rr Com Objects
 location | ^ORD(101.15,
 description | 

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name |  | STRING |  | REQUIRED, INDEXED |  | 
| object_guid | .02 | Object Guid | {::nomarkdown}COM Object GUID{:/} | STRING |  | REQUIRED |  | 
| inactive | .03 | Inactive |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>I</dt><dd>INACTIVE</dd></dl>{:/} | 
| param1 | .04 | Param1 | {::nomarkdown}Optional parameter to pass to COM object as PARAM1 {:/} | STRING |  |  |  | 
| description | 2 | Description | {::nomarkdown}Optional description of COM Object.  Should include any contact<br/>information for vendor or other provider of the COM Object.{:/} | STRING |  |  |  | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 7:54:22 am</p>{:/}