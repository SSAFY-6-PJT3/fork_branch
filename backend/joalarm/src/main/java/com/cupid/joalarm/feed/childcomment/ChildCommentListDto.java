package com.cupid.joalarm.feed.childcomment;

import io.swagger.annotations.ApiParam;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChildCommentListDto {

    @ApiParam(value = "댓글 id")
    private Long commentId;

    @ApiParam(value = "유저 id")
    private Long userId;

    @ApiParam(value = "유저이름")
    private String username;

    @ApiParam(value = "댓글내용")
    private String content;

    @ApiParam(value = "댓글 작성 시각")
    private LocalDateTime createdAt;

}
