---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; LA LEDI ORU HL7 STATUS<br/>
# LA LEDI ORU HL7 STATUS

This parameter is used to control the building of LEDI HL7 result messageson an interface basis for specific messaging partners based on the AGENCYassociated with the interface. It allows for the selectiveenabling/disabling of either all result messaging or just result messagingin support of specific areas of VistA Laboratory. It currently allows for control of the main laboratory areas, also referred to as subscripts or a combination. The areas are: &#x27;CH&#x27; &#x3D; laboratory tests within the &quot;CH&quot; subscript of LAB DATA file (#63). &#x27;MI&#x27; &#x3D; laboratory tests within the &quot;MI&quot; subscript of LAB DATA file (#63). &#x27;AP&#x27; &#x3D; laboratory tests within the &quot;SP&quot;, &quot;CY&quot;, and &quot;EM&quot; subscript of LAB        DATA file (#63). Selecting &quot;Disabled&quot; disables all sections of laboratory.Selecting &quot;Enabled&quot; enables all three main sections (&quot;CH&quot;, &quot;MI&quot;, and &quot;AP&quot;)

## Properties

Property | Value
--- | ---
Summary | LEDI HL7 Result Messaging Status
Value Type | set of codes
Value Domain | 0:Disabled;1:Enabled;2:CH Only;3:MI Only;4:AP Only;5:CH/MI;6:CH/AP;7:MI/AP
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}