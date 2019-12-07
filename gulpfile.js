const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");

gulp.task("watchall", async() => {
    gulp.watch("*.html", async() => {
        gulp.src("*.html")
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910"));
    });

    gulp.watch("js/**/*", async() => {
        gulp.src("js/**/*")
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\js"))
    })


    gulp.watch("img/**/*", async() => {
        gulp.src("img/**/*")
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\img"))
    })

    // gulp.watch("swiper-5.0.4/**/*", async() => {
    //     gulp.src("swiper-5.0.4/**/*")
    //         .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\swiper-5.0.4"))
    // })

    gulp.watch("sass/**/*", async() => {
        gulp.src("sass/**/*")
            .pipe(sass())
            .pipe(gulp.dest("D:\\peak\\css"))
    })


    gulp.watch("sass/**/*", async() => {
        gulp.src("sass/**/*")
            .pipe(sass())
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\css"))
    })
    gulp.watch("php/**/*", async() => {
        gulp.src("php/**/*")
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\php"))
    })
})


gulp.task("server", async() => {
    connect.server({
        root: "D:\\peak"
    })
});

// gulp.task("copyfile", async() => {
//     gulp.src('./**/*')
//         .pipe(gulp.dest('D:\\phpStudy\\WWW\\peak1910'));
// });





















// var gulp=require('gulp');
// var uglify = require('gulp-uglify');//引入该模块压缩js使用
// var minfyCss = require('gulp-minify-css');//压缩css
// var imagemin = require('gulp-imagemin');//压缩img
// var sass = require('gulp-sass');




// gulp.task("copy",function(){//拷贝文件命令
//     gulp.src('*/.html')
//     .pipe(gulp.dest('D:\\phpstudy\\WWW\\peak1910'));
// });
// gulp.task("watchall",async () => {
// //     gulp.watch("css/*.scss",async()=>{
// //         gulp.src("css/*.scss")
// //         .pipe(sass())
// //         .pipe(gulp.dest("css"))
// //         // .pipe(minfyCss())
// //         // .pipe(gulp.dest())
// //     })
// 	gulp.watch("*.html", async() => {
//         gulp.src("*.html")
//             .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910"));
//     });

//     gulp.watch("js/**/*", async() => {
//         gulp.src("js/**/*")
//             .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\js"))
//     })


//     gulp.watch("img/**/*", async() => {
//         gulp.src("img/**/*")
//             .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\img"))
//     })

//     gulp.watch("swiper-5.0.4/**/*", async() => {
//         gulp.src("swiper-5.0.4/**/*")
//             .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\swiper-5.0.4"))
//     })

//     gulp.watch("sass/**/*", async() => {
//         gulp.src("sass/**/*")
//             .pipe(sass())
//             .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak\\css"))
//     })

//     gulp.watch("sass/**/*", async() => {
//         gulp.src("sass/**/*")
//             .pipe(sass())
//             .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\css"))
//     })
//     gulp.watch("php/**/*", async() => {
//         gulp.src("php/**/*")
//             .pipe(gulp.dest("D:\\phpStudy\\WWW\\peak1910\\php"))
//     })
// })


// gulp.task("server", async() => {
// 	connect.server({
// 		root: "D:\\peak"
// 	})
// });