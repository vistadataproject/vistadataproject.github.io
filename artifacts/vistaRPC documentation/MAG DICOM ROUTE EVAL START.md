---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE EVAL START 

 property | value 
--- | --- 
 label | MAG DICOM ROUTE EVAL START
 tag | START
 routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Start one rule evaluator to evaluate the newly acquiredimages for one specific location. The rule-evaluators will run on the VistA system. They will bestarted and stopped, however, from the DICOM Gateways.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired. | 
| RULES | LIST |  | true | The value of this parameter is an array (one integer subscript).This array contains the routing rules. Each element of thisarray represents one part of a rule; the strings in these elementseach contain a number of fields, separated by carets (\^\). In all rule-elements, the first caret-piece is the rule-number. The second piece is equal to either \ACTION\, \CONDITION\or \PRIORITY\. When the second piece is equal to \ACTION\, there may be one or moreadditional pieces. If there is only an additional third piece,this piece represents the action-verb (\SEND\ or \BALANCE\currently).When there are four or more pieces, the third piece representsthe sequence number of the command-parameter, and the additionalpieces represent the command-specific parameters. When the second piece is equal to \PRIORITY\, the third piecewill indicate the relative priority. Typical values are \LOW\,\MEDIUM\ and \HIGH\. When the second piece is equal to \CONDITION\, there are eitherfive or seven pieces in total. In that case, the third piece always represents the sequence numberof the current condition for the current rule.When there are five pieces,the fourth and fifth are a keyword=value pair and describethe nature of the condition. Valid keywords are \KW\ (keyword),\DT\ (data-type), \OP\ (operator) and \VA\ (value).A sequence of seven pieces only occurs when the data-type isequal to DT (Date/Time). When there are seven pieces, the fourthpiece is always equal to \VA\ (value) and the fifth through seventhpieces indicate a possible date/time range that applies for thecondition. Note that conditions are always ANDed with one another, andthe multiple date/time ranges for a date/time value are alwaysORed with one another. | 




 Generated on January 11th 2017, 7:15:04 am