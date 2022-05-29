export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: 'dist',
        },
        compress:true,
        port: 9000,
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: [{loader : 'babel-loader'}],
            },
            {
                test: /\.css$/,
                use: ["style-loader",'css-loader',],
            },
            {
                test: /\.(png|jpg|gif|svg|mp3)$/,
                use: [{loader: 'file-loader'}]
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
        ],
    
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}