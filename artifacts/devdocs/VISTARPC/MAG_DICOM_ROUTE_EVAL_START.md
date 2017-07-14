---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM ROUTE EVAL START<br/>
# MAG DICOM ROUTE EVAL START

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Start one rule evaluator to evaluate the newly acquiredimages for one specific location. The rule-evaluators will run on the VistA system. They will bestarted and stopped, however, from the DICOM Gateways.

## Properties

Property | Value
--- | ---
Label | START
Routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.
RULES | LIST |  | true | The value of this parameter is an array (one integer subscript).This array contains the routing rules. Each element of thisarray represents one part of a rule; the strings in these elementseach contain a number of fields, separated by carets (&quot;^&quot;). In all rule-elements, the first caret-piece is the rule-number. The second piece is equal to either &quot;ACTION&quot;, &quot;CONDITION&quot;or &quot;PRIORITY&quot;. When the second piece is equal to &quot;ACTION&quot;, there may be one or moreadditional pieces. If there is only an additional third piece,this piece represents the action-verb (&quot;SEND&quot; or &quot;BALANCE&quot;currently).When there are four or more pieces, the third piece representsthe sequence number of the command-parameter, and the additionalpieces represent the command-specific parameters. When the second piece is equal to &quot;PRIORITY&quot;, the third piecewill indicate the relative priority. Typical values are &quot;LOW&quot;,&quot;MEDIUM&quot; and &quot;HIGH&quot;. When the second piece is equal to &quot;CONDITION&quot;, there are eitherfive or seven pieces in total. In that case, the third piece always represents the sequence numberof the current condition for the current rule.When there are five pieces,the fourth and fifth are a keyword&#x3D;value pair and describethe nature of the condition. Valid keywords are &quot;KW&quot; (keyword),&quot;DT&quot; (data-type), &quot;OP&quot; (operator) and &quot;VA&quot; (value).A sequence of seven pieces only occurs when the data-type isequal to DT (Date/Time). When there are seven pieces, the fourthpiece is always equal to &quot;VA&quot; (value) and the fifth through seventhpieces indicate a possible date/time range that applies for thecondition. Note that conditions are always ANDed with one another, andthe multiple date/time ranges for a date/time value are alwaysORed with one another.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}