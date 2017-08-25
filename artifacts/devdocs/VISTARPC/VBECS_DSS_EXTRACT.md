---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VBECS DSS EXTRACT<br/>
# VBECS DSS EXTRACT

This RPC inserts or updates post transfusion related data in the VBECS DSSEXTRACT file (#6002.03). The data is passed into the VBECDSS routine through the input parameters and a success indicator is returned to the Blood Bank medical device.

## Properties

Property | Value
--- | ---
Label | EN
MUMPS Implementation | [VBECDSS](http://code.osehra.org/dox/Routine_VBECDSS_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMS | LITERAL | 999 | true | PARAMS(&quot;TRANSACTION ID&quot;) &#x3D; Unique record identifierPARAMS(&quot;DFN&quot;) &#x3D; Patient identifierPARAMS(&quot;ORDERING LOCATION&quot;) &#x3D; Ordering Institution IdentifierPARAMS(&quot;TRANSFUSION LOCATION&quot;) &#x3D; Tranfusing Institution identifierPARAMS(&quot;PHYSICIAN&quot;) &#x3D; Provider requesting blood product for transfusionPARAMS(&quot;ORDERING PROVIDER&quot;) &#x3D; Provider who ordered Type and CrossmatchPARAMS(&quot;PRODUCT NAME&quot;) &#x3D; Short blood product namePARAMS(&quot;COMPONENT ABBREVIATION&quot;) &#x3D; Abbreviation of blood componentPARAMS(&quot;NUMBER OF UNITS&quot;) &#x3D; Number of pooled units transfusedPARAMS(&quot;TRANSFUSION DATE&quot;) &#x3D; Date/time of transfusionPARAMS(&quot;VOLUME&quot;) &#x3D; Total volume of units transfusedPARAMS(&quot;REACTION TYPE&quot;) &#x3D; Type of reaction indicatedPARAMS(&quot;UNIT MODIFICATION&quot;) &#x3D; String of codes representing modifications    done on units transfused. String cannot exceed 6 character.    D &#x3D; Deglycerolize   F &#x3D; Freeze   I &#x3D; Irradiate   L &#x3D; Leukoreduce   P &#x3D; Pool   R &#x3D; Rejuvenate   S &#x3D; Split/Divide   T &#x3D; Thaw   U &#x3D; Thaw/Pool Cryo   V &#x3D; Volume Reduce   W &#x3D; WashPARAMS(&quot;REACTION&quot;) &#x3D; Yes or No value if a reaction was indicated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}